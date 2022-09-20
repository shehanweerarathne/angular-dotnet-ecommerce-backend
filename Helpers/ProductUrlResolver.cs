using angular_dotnet_ecommerce_backend.DTOs;
using angular_dotnet_ecommerce_backend.Entities;
using AutoMapper;

namespace angular_dotnet_ecommerce_backend.Helpers;

public class ProductUrlResolver: IValueResolver<Product,ProductReturnDto,string>
{
    private readonly IConfiguration _config;

    public ProductUrlResolver(IConfiguration config)
    {
        _config = config;
    }
    public string Resolve(Product source, ProductReturnDto destination, string destMember, ResolutionContext context)
    {
        if (!string.IsNullOrEmpty(source.PictureUrl))
        {
            return _config["ApiUrl"] + source.PictureUrl;
        }

        return null;
    }
}