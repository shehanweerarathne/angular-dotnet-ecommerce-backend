using AutoMapper;
using Ecommerce_Backend.Models;

namespace Ecommerce_Backend.DTOs.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<CreateProductDto, Product>();
        CreateMap<UpdateProductDto, Product>();
    }
}