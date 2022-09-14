using angular_dotnet_ecommerce_backend.Core.Interfaces;
using angular_dotnet_ecommerce_backend.Core.Specifications;
using angular_dotnet_ecommerce_backend.Data;
using angular_dotnet_ecommerce_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace angular_dotnet_ecommerce_backend.Core;

public class GenericRepository<T> : IGenericRepository<T> where T: BaseEntity
{
    private readonly StoreContext _context;

    public GenericRepository(StoreContext context)
    {
        _context = context;
    }
    public async Task<T> GetByIdAsync(Guid id)
    {
        return await _context.Set<T>().FirstOrDefaultAsync(p => p.Id == id);
    }

    public async Task<IReadOnlyList<T>> ListAllAsync()
    {
        return await _context.Set<T>().ToListAsync();
    }

    public async Task<T> GetEntityWithSpec(ISpecification<T> specification)
    {
        return await ApplySpecification(specification).FirstOrDefaultAsync();
    }

    public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> specification)
    {
        return await ApplySpecification(specification).ToListAsync();
    }

    private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    {
        return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), spec);
    }
}