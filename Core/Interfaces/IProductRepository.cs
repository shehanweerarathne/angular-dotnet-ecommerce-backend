using angular_dotnet_ecommerce_backend.Entities;

namespace angular_dotnet_ecommerce_backend.Core.Interfaces;

public interface IProductRepository
{
    Task<Product> GetProductByIdAsync(Guid id);
    Task<IReadOnlyList<Product>> GetProductsAsync();
    Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();
    Task<IReadOnlyList<ProductType>> GetProductTypesAsync();
}