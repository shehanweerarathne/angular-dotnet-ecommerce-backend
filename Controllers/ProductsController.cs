using angular_dotnet_ecommerce_backend.Core.Interfaces;
using angular_dotnet_ecommerce_backend.Data;
using angular_dotnet_ecommerce_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace angular_dotnet_ecommerce_backend.Controllers;
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _productRepository;


    public ProductsController(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }

    [HttpGet]
    public async  Task<ActionResult<List<Product>>> GetProducts()
    {
        var products = await _productRepository.GetProductsAsync();
        return Ok(products);
    }
    [HttpGet("{id}")]
    public async  Task<ActionResult<Product>> GetProduct(Guid id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        return Ok(product);
    }
}