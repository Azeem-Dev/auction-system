using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            var user = _db.Users.Include(c => c.UserAuctions).FirstOrDefault(c => c.Id == req.UserId);
            if (user == null) return BadRequest();
            user.UserAuctions.Add(new Models.Auction
            {
                ProductName = req.ProductName,
                StartingBid = req.StartingBid,
                ImagePath = req.ImagePath,
                MarketValue = req.MarketValue,
                AuctionStartDate = req.StartingDate,
                AuctionEndDate = req.EndDate,
                ProductDescription = req.ProductDescription
                
            });
            await _db.SaveChangesAsync();
            return Ok();
        }
        [HttpGet("GetFeaturedAuctionItems/{number}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetFeaturedItems([FromRoute] int number)
        {
            return Ok(_db.Auctions.Include(c=>c.AuctionBids).OrderBy(r => Guid.NewGuid()).Take(number).Select(c => new FeaturedAuctionItemsResponse
            {
                Id = c.Id,
                Name = c.ProductName,
                Description = c.ProductDescription,
                EndDate = c.AuctionEndDate,
                StartDate = c.AuctionStartDate,
                HigestBid = c.AuctionBids.Select(d => d.BidPrice).Max()
            }));
        }
        [HttpGet("GetUserAuctionItems/{userId}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetUserAuctionItems(int userId)
        {
            if (!_db.Users.Any(c => c.Id == userId)) return BadRequest();
            return Ok(

                _db.Users.Include(c => c.UserAuctions).Where(c => c.Id == userId).Select(c => c.UserAuctions.Select(d => new FeaturedAuctionItemsResponse
                {
                    Id = d.Id,
                    Description = d.ProductDescription,
                    StartDate = d.AuctionStartDate,
                    EndDate = d.AuctionEndDate,
                    Name = d.ProductName
                }))

                );
        }
    }
}
