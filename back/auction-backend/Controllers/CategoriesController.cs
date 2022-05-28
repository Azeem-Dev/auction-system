using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace auction_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly DataContext _db;

        public CategoriesController(DataContext db)
        {
            _db = db;
        }
        [HttpPost]
        public async Task<ActionResult<bool>> AddNewCategory(string name)
        {
            return Ok();
        }
        [HttpPost("{id}")]
        public async Task<ActionResult<bool>> AddNewSubCategory(string name, int id)
        {
            return Ok();
        }
        [HttpGet("GetAllCategories")]
        public async Task<ActionResult<List<GetAllCategoriesResponse>>> GetCategories()
        {
            return Ok();
        }
    }
}
