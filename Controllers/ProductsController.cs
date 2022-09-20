using angular_dotnet_ecommerce_backend.Core.Interfaces;
using angular_dotnet_ecommerce_backend.Data;
using angular_dotnet_ecommerce_backend.DTOs;
using angular_dotnet_ecommerce_backend.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace angular_dotnet_ecommerce_backend.Controllers;

public class ProductsController : BaseApiController
{
    private readonly IProductRepository _productRepository;
    private readonly IMapper _mapper;


    public ProductsController(IProductRepository productRepository, IMapper mapper)
    {
        _productRepository = productRepository;
        _mapper = mapper;
    }

    [HttpGet]
    public async  Task<ActionResult<List<ProductReturnDto>>> GetProducts()
    {
        var products = await _productRepository.GetProductsAsync();
        List<ProductReturnDto> productViews = _mapper.Map<IReadOnlyList<Product>, List<ProductReturnDto>>(products);
        return Ok(productViews);
    }
    [HttpGet("{id}")]
    public async  Task<ActionResult<Product>> GetProduct(Guid id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        return Ok(_mapper.Map<Product,ProductReturnDto>(product));
    }

    [HttpGet("brands")]
    public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
    {
        return Ok(await _productRepository.GetProductBrandsAsync());
    }
    
    [HttpGet("types")]
    public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
    {
        return Ok(await _productRepository.GetProductTypesAsync());
    }
}