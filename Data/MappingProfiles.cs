using angular_dotnet_ecommerce_backend.DTOs;
using angular_dotnet_ecommerce_backend.Entities;
using AutoMapper;

namespace angular_dotnet_ecommerce_backend.Data;

public class MappingProfiles: Profile
{
    public MappingProfiles()
    {
        CreateMap<Product,ProductReturnDto>();
    }
}