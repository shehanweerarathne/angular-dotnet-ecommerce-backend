using Ecommerce_Backend.Models;
using Ecommerce_Backend.Models.OrderAggregate;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace Ecommerce_Backend.Data;
public class DataContext : IdentityDbContext<User,Role,Guid>
{
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }
    public DbSet<Product> Products { get; set; }
    public DbSet<Basket> Baskets { get; set; }
    public DbSet<Order> Orders { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
            .HasOne(a => a.Address)
            .WithOne()
            .HasForeignKey<UserAddress>(a => a.Id)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Entity<Role>()
            .HasData(
                new Role {Id = Guid.Parse("8b09e4a6-5182-4558-85b0-bedc94cb231a"), Name = "Member", NormalizedName = "MEMBER" },
                new Role {Id = Guid.Parse("8d1bd94a-c96d-446b-9549-5f4bc069a779"), Name = "Admin", NormalizedName = "ADMIN" }
            );

    }
}