using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace auction_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _db;

        public UsersController(DataContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<ActionResult<object>> GetAllUsers()
        {
            return await _db.Users.ToListAsync();
        }
        [HttpDelete("DeleteUser/{id}")]
        public async Task<ActionResult<object>> DeleteUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
            return Ok("User with userId: " + id + " Successfully deleted");
        }

    }
}
