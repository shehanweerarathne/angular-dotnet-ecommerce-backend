using angular_dotnet_ecommerce_backend.Errors;
using Microsoft.AspNetCore.Mvc;

namespace angular_dotnet_ecommerce_backend.Controllers;

[Route("errors/{code}")]
[ApiExplorerSettings(IgnoreApi = true)]
public class ErrorController : BaseApiController
{
    public IActionResult Error(int code)
    {
        return new ObjectResult(new ApiResponse(code, null));
    }
}