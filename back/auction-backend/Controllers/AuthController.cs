using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Mvc;

namespace auction_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _db;

        public AuthController(DataContext db)
        {
            _db = db;
        }
        [HttpPost("login")]
        public async Task<ActionResult<bool>> Login(LoginRequest req)
        {

        }
        [HttpPost("register")]
        public async Task<ActionResult<bool>> Register(RegisterRequest req)
        {

        }
    }
}
