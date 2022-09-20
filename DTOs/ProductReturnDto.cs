using angular_dotnet_ecommerce_backend.Entities;

namespace angular_dotnet_ecommerce_backend.DTOs;

public class ProductReturnDto
{
    public Guid Id { get; set; }

    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public string PictureUrl { get; set; }
    public string ProductType { get; set; }
    public Guid ProductTypeId { get; set; }
    public string ProductBrand { get; set; }
    public Guid ProductBrandId { get; set; }
}