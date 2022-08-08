using Ecommerce_Backend.Data;
using Ecommerce_Backend.DTOs;
using Ecommerce_Backend.Extentions;
using Ecommerce_Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce_Backend.Controllers;

public class PaymentController:BaseApiController
{
    private readonly IPaymentService _paymentService;
    private readonly DataContext _context;
    private readonly IConfiguration _config;

    public PaymentController(IPaymentService paymentService, DataContext context, IConfiguration config)
    {
        _paymentService = paymentService;
        _context = context;
        _config = config;
    }

    [Authorize]
    [HttpPost]
    public async Task<ActionResult<BasketDto>> CreateOrUpdatePaymentIntent()
    {
        var basket = await _context.Baskets
            .RetrieveBasketWithItems(User.Identity.Name)
            .FirstOrDefaultAsync();
        if (basket == null)
        {
            return NotFound();
        }

        var intent = await _paymentService.CreateOrUpdatePaymentIntent(basket);
        if (intent == null) return BadRequest(new ProblemDetails {Title = "Problem creating payment intent"});
        basket.PaymentIntentId = basket.PaymentIntentId ?? intent.Id;
        basket.ClientSecret = basket.ClientSecret ?? intent.ClientSecret;
        _context.Update(basket);
        var result = await _context.SaveChangesAsync() > 0;
        if (!result) return BadRequest(new ProblemDetails {Title = "Problem update basket intent"});

        return basket.MapBasketToDto();
    }
}