namespace Ecommerce_Backend.Models.OrderAggregate;

public class Order
{
    public Guid Id { get; set; }
    public string BuyerId { get; set; }
    public ShippingAddress ShippingAddress { get; set; }
    public DateTime OrderDate { get; set; }
    public List<OrderItem> OrderItems { get; set; }
    public long Subtotal { get; set; }
    public long DeliveryFee { get; set; }
    public OrderStatus Type { get; set; } = OrderStatus.Pending;

    public long GetTotal()
    {
        return Subtotal + DeliveryFee;
    }
}