using Microsoft.AspNetCore.Mvc;

namespace Ecommerce_Backend.Controllers;

public class TestController : BaseApiController
{
    [HttpGet]
    public string test()
    {
        return Environment.GetEnvironmentVariable("ConnectionString") ?? "No connection";
    }
    
}