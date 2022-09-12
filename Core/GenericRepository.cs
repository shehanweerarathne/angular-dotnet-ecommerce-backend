using angular_dotnet_ecommerce_backend.Core.Interfaces;
using angular_dotnet_ecommerce_backend.Entities;

namespace angular_dotnet_ecommerce_backend.Core;

public class GenericRepository<T> : IGenericRepository<T> where T: BaseEntity
{
    public Task<T> GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyList<T>> ListAllAsync()
    {
        throw new NotImplementedException();
    }
}