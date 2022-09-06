using System.Text.Json;
using AutoMapper;
using Ecommerce_Backend.Data;
using Ecommerce_Backend.DTOs;
using Ecommerce_Backend.DTOs.RequestHelpers;
using Ecommerce_Backend.Extentions;
using Ecommerce_Backend.Models;
using Ecommerce_Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce_Backend.Controllers;

public class ProductsController: BaseApiController
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;
    private readonly IImageService _imageService;

    public ProductsController(DataContext context, IMapper mapper, IImageService imageService)
    {
        _context = context;
        _mapper = mapper;
        _imageService = imageService;
    }
    
    
    [HttpPost("GetAllProducts")]
    public async Task<ActionResult<List<Product>>> GetAllProducts(ProductParams productParams)
    {
        var query =  _context.Products.Sort(productParams.OrderBy).Search(productParams.SearchTerm).Filter(productParams.Brands,productParams.Types).AsQueryable();

        /*query = query.ApplyPaging(productParams);
        return Ok(query);*/
        var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);
        Response.Headers.Add("Pagination", JsonSerializer.Serialize(products.MetaData));
        return products;
    }
    
    [HttpGet]
    public async Task<ActionResult<PagedList<Product>>> GetProducts([FromQuery]ProductParams productParams)
    {
        var query = _context.Products
            .Sort(productParams.OrderBy)
            .Search(productParams.SearchTerm)
            .Filter(productParams.Brands, productParams.Types)
            .AsQueryable();

        var products = await PagedList<Product>.ToPagedList(query, 
            productParams.PageNumber, productParams.PageSize);

        Response.AddPaginationHeader(products.MetaData);

        return products;
    }


    
    
    [HttpGet("{id}",Name = "GetProduct")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
        var product = await _context.Products.FindAsync(id);
        var guid = GetNewGuidString();

        if (product == null) return NotFound();

        return product;
    }
    
    private static string GetNewGuidString()
    {
        return Guid.NewGuid().ToString();
    }

    [HttpGet("filters")]
    public async Task<IActionResult> GetFilters()
    {
        var brands = await _context.Products.Select(p => p.Brand).Distinct().ToListAsync();
        var types = await _context.Products.Select(p => p.Type).Distinct().ToListAsync();
        return Ok(new {brands,types});
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<ActionResult<Product>> CreateProduct([FromForm]CreateProductDto createProduct)
    {
        var product = _mapper.Map<Product>(createProduct);
        if (createProduct.File != null)
        {
            var imageResult = await _imageService.AddImageAsync(createProduct.File);
            if (imageResult.Error != null)
                return BadRequest(new ProblemDetails
                {
                    Title = imageResult.Error.Message
                });
            product.PictureUrl = imageResult.SecureUrl.ToString();
            product.PublicId = imageResult.PublicId;
        }
        _context.Products.Add(product);
        var result = await _context.SaveChangesAsync() > 0;
        if (result) return CreatedAtRoute("GetProduct", new {Id = product.Description}, product);
        return BadRequest(new ProblemDetails {Title = "Problem creating new product"});
        
    }
    
    [Authorize(Roles = "Admin")]
    [HttpPut]
    public async Task<ActionResult<Product>> UpdateProduct(UpdateProductDto updateProduct)
    {
        var product = await _context.Products.FindAsync(updateProduct.Id);
        if (product == null) return NotFound();
        _mapper.Map(updateProduct, product);
        var result = await _context.SaveChangesAsync() > 0;
        /*var product = _mapper.Map<Product>(updateProduct);
        _context.Products.Add(product);*/
        
        if (result) return CreatedAtRoute("GetProduct", new {Id = product.Description}, product);
        return BadRequest(new ProblemDetails {Title = "Problem updating product"});
    }
    
    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteProduct(Guid id)
    {
        var product = await _context.Products.FindAsync(id);
        if (product == null) return NotFound();
        _context.Products.Remove(product);
        var result = await _context.SaveChangesAsync() > 0;
        /*var product = _mapper.Map<Product>(updateProduct);
        _context.Products.Add(product);*/
        
        if (result) return CreatedAtRoute("GetProduct", new {Id = product.Description}, product);
        return BadRequest(new ProblemDetails {Title = "Problem Deleting product"});
    }

}