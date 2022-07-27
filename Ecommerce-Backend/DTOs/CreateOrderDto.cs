using Ecommerce_Backend.Models.OrderAggregate;

namespace Ecommerce_Backend.DTOs;

public class CreateOrderDto
{
    public bool SaveAddress { get; set; }
    public ShippingAddress ShippingAddress { get; set; }    
}