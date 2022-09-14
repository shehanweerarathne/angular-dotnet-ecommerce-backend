using System.Linq.Expressions;

namespace angular_dotnet_ecommerce_backend.Core.Specifications;

public interface ISpecification<T>
{
    Expression<Func<T,bool>> Criteria { get; }
    List<Expression<Func<T,object>>> Includes { get; }
}