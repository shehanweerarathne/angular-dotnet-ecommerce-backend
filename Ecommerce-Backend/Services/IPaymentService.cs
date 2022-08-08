using Ecommerce_Backend.Models;
using Stripe;

namespace Ecommerce_Backend.Services;

public interface IPaymentService
{
    Task<PaymentIntent> CreateOrUpdatePaymentIntent(Basket basket);
}