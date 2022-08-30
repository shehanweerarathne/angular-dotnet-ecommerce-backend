using angular_dotnet_ecommerce_backend.Data;
using angular_dotnet_ecommerce_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace angular_dotnet_ecommerce_backend.Controllers;
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly StoreContext _context;

    public ProductsController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async  Task<ActionResult<List<Product>>> GetProducts()
    {
        var products = await _context.Products
            .Include(b=>b.ProductBrand)
            .Include(t=>t.ProductType)
            .AsQueryable()
            .ToListAsync();
        return Ok(products);
    }
}