using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace auction_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionsController : ControllerBase
    {
        private readonly DataContext _db;

        public AuctionsController(DataContext db)
        {
            _db = db;
        }
        [HttpPost("AddNewAuctionItem")]
        public async Task<ActionResult<bool>> AddNewAuctionItem(AddNewAuctionItemRequest req)
        {
            return Ok();
        }
        [HttpGet("GetFeaturedAuctionItems/{number}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetFeaturedItems([FromRoute]int number)
        {
            return Ok(null);
        }
    }
}
