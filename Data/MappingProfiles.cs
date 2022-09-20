using angular_dotnet_ecommerce_backend.DTOs;
using angular_dotnet_ecommerce_backend.Entities;
using angular_dotnet_ecommerce_backend.Helpers;
using AutoMapper;

namespace angular_dotnet_ecommerce_backend.Data;

public class MappingProfiles: Profile
{
    public MappingProfiles()
    {
        CreateMap<Product,ProductReturnDto>()
            .ForMember(d=>d.ProductBrand, o => o.MapFrom(s=>s.ProductBrand.Name))
            .ForMember(d=>d.ProductType, o => o.MapFrom(s=>s.ProductType.Name))
            .ForMember(d=>d.PictureUrl,o=> o.MapFrom<ProductUrlResolver>());
        CreateMap<ProductReturnDto, Product>();
    }
}