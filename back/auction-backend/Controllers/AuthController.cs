using auction_backend.Dtos;
using auction_backend.Ef_Core;
using auction_backend.Models;
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
            var user = _db.Users.FirstOrDefault(c => c.UserName.ToLower() == req.UsernameOrEmail.ToLower() || c.Email.ToLower() == req.UsernameOrEmail.ToLower());
            if (user == null) return NotFound();
            if (user.Password.ToLower() != req.Password.ToLower()) return BadRequest();
            return Ok(true);
        }
        [HttpPost("admin-login")]
        public async Task<ActionResult<bool>> AdminLogin(LoginRequest req)
        {
            var user = _db.Users.FirstOrDefault(c => c.UserName.ToLower() == req.UsernameOrEmail.ToLower() || c.Email.ToLower() == req.UsernameOrEmail.ToLower());
            if (user == null) return NotFound();
            if (user.Password.ToLower() != req.Password.ToLower()) return BadRequest();
            if (!user.IsAdmin) return BadRequest();
            return Ok(true);
        }
        [HttpPost("register")]
        public async Task<ActionResult<bool>> Register(RegisterRequest req)
        {
            if (_db.Users.Any(c => c.Email.ToLower() == req.Email.ToLower() || c.UserName.ToLower() == req.UserName.ToLower())) return BadRequest();

            var user = new User
            {
                Address = req.Address,
                Password = req.Password,
                Email = req.Email,
                PhoneNo = req.PhoneNo,
                UserName = req.UserName,
                UserType = req.UserType,
            };

            await _db.AddAsync<User>(user);
            await _db.SaveChangesAsync();
            return Ok();
        }

    }
}
