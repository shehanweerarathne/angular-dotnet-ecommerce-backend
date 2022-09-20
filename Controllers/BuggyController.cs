using angular_dotnet_ecommerce_backend.Data;
using angular_dotnet_ecommerce_backend.Errors;
using Microsoft.AspNetCore.Mvc;

namespace angular_dotnet_ecommerce_backend.Controllers;

public class BuggyController: BaseApiController
{
    private readonly StoreContext _context;

    public BuggyController(StoreContext context)
    {
        _context = context;
    }
    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
        var thing = _context.Products.Find(Guid.Parse("d3119e4f-1be0-4fed-9bf1-a7f2ed0d1908"));
        if (thing == null) return NotFound(new ApiResponse(404,null));
        return Ok(thing);
    }
    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
        var thing = _context.Products.Find(Guid.Parse("d3119e4f-1be0-4fed-9bf1-a7f2ed0d1908"));
        var thingToReturn = thing.ToString();
        return Ok();
    }
    [HttpGet("badrequest")]
    public ActionResult GetBadRequest()
    {
        return BadRequest(new ApiResponse(400,null));
    }
    [HttpGet("badrequest/{id}")]
    public ActionResult GetBadRequestWithId(Guid id)
    {
        return Ok();
    }
  
}