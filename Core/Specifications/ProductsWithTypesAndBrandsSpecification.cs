using System.Linq.Expressions;
using angular_dotnet_ecommerce_backend.Entities;

namespace angular_dotnet_ecommerce_backend.Core.Specifications;

public class ProductsWithTypesAndBrandsSpecification : BaseSpecification<Product>
{
    public ProductsWithTypesAndBrandsSpecification()
    {
        AddInclude(x => x.ProductType);
        AddInclude(x => x.ProductBrand);
    }

    public ProductsWithTypesAndBrandsSpecification(Guid id) : base(x => x.Id == id )
    {
        AddInclude(x => x.ProductType);
        AddInclude(x => x.ProductBrand);
    }
}