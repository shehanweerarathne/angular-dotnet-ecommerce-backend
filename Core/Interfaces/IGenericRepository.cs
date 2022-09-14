using angular_dotnet_ecommerce_backend.Core.Specifications;
using angular_dotnet_ecommerce_backend.Entities;

namespace angular_dotnet_ecommerce_backend.Core.Interfaces;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<T> GetByIdAsync(Guid id);
    Task<IReadOnlyList<T>> ListAllAsync();
    Task<T> GetEntityWithSpec(ISpecification<T> specification);
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> specification);
}