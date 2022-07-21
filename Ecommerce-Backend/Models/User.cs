using Microsoft.AspNetCore.Identity;

namespace Ecommerce_Backend.Models;

public class User : IdentityUser<Guid>
{
    public UserAddress Address { get; set; }
}