using Ecommerce_Backend.Models;

namespace Ecommerce_Backend.Services;

public interface ITokenService
{
    Task<string> GenerateToken(User user);
}