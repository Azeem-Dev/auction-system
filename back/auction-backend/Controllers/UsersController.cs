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
            var users = await _db.Users.Where(c => !c.IsDeleted && !c.IsAdmin).ToListAsync();
            return Ok(users);
        }
        [HttpDelete("DeleteUser/{id}")]
        public async Task<ActionResult<object>> DeleteUser(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null) return NotFound();
            user.IsDeleted = true;
            _db.Users.Update(user);
            await _db.SaveChangesAsync();
            return Ok("User with userId: " + id + " Successfully deleted");
        }

    }
}
