using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace auction_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BidController : ControllerBase
    {
        private readonly DataContext _db;

        public BidController(DataContext db)
        {
            _db = db;
        }
        [HttpPost]
        public async Task<ActionResult<bool>> AddBidToAuction(AddBidToAuctionReq req)
        {
            if (!_db.Users.Any(c => c.Id == req.UserId)) return BadRequest();
            if(!_db.Auctions.Any(c=>c.Id == req.AuctionId)) return BadRequest();

            await _db.Bids.AddAsync(new Models.Bid
            {
                AuctionId = req.AuctionId,
                UserId = req.UserId,
                BidPrice = req.BidAmount
            });
            await _db.SaveChangesAsync();
            return Ok();
        }
    }
}
