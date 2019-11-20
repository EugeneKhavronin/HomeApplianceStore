using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        [Route("{*catchall}")]
        public IActionResult Index()
        {
            return  File("index.html", "text/html");
        }
    }
}