using auction_backend.Dtos;
using auction_backend.Ef_Core;
using auction_backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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
            var auctionItem = new Models.Auction
            {
                ProductName = req.ProductName,
                StartingBid = req.StartingBid,
                ImagePath = req.ImagePath,
                MarketValue = req.MarketValue,
                AuctionStartDate = req.StartingDate,
                AuctionEndDate = req.EndDate,
                ProductDescription = req.ProductDescription

            };
            user.UserAuctions.Add(auctionItem);
            await _db.SaveChangesAsync();
            _db.ItemCategories.Add(new Models.ItemCategories
            {
                AuctionItemId = auctionItem.Id,
                CategoryId = req.CategoryId,
            });
            await _db.SaveChangesAsync();
            return Ok();
        }

        [HttpPost("UpdateAuctionItem")]
        public async Task<ActionResult<bool>> UpdateAuctionItem(AddNewAuctionItemRequest req)
        {
            var user = _db.Users.Include(c => c.UserAuctions).ThenInclude(c => c.ItemCategories).FirstOrDefault(c => c.Id == req.UserId);
            if (user == null) return BadRequest();

            var selectedAuction = user.UserAuctions.FirstOrDefault(c => c.Id == req.Id);
            if (selectedAuction == null) return BadRequest();


            selectedAuction.ProductName = req.ProductName;
            selectedAuction.ProductDescription = req.ProductDescription;
            selectedAuction.AuctionStartDate = req.StartingDate;
            selectedAuction.AuctionEndDate = req.EndDate;
            selectedAuction.MarketValue = req.MarketValue;
            selectedAuction.StartingBid = req.StartingBid;
            selectedAuction.ImagePath = string.IsNullOrEmpty(req.ImagePath) ? selectedAuction.ImagePath : req.ImagePath;
            selectedAuction.ItemCategories.RemoveAll(c => true);
            selectedAuction.ItemCategories.Add(new ItemCategories
            {
                CategoryId = req.CategoryId,
            });

            await _db.SaveChangesAsync(); ;
            return Ok();
        }


        [HttpGet("GetFeaturedAuctionItems/{number}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetFeaturedItems([FromRoute] int number)
        {
            //var auctions = _db.Auctions.Include(c => c.AuctionBids).OrderBy(r => Guid.NewGuid()).Take(number);

            //List<FeaturedAuctionItemsResponse> response = new List<FeaturedAuctionItemsResponse>();
            //foreach (var auction in auctions)
            //{
            //    response.Add(new FeaturedAuctionItemsResponse
            //    {
            //        Id = auction.Id,
            //        Name = auction.ProductName,
            //        Description = auction.ProductDescription,
            //        EndDate = auction.AuctionEndDate,
            //        StartDate = auction.AuctionStartDate,
            //        StartingBid = auction.StartingBid,
            //        MarketValue = auction.MarketValue,
            //        HigestBid = auction.AuctionBids.Count == 0 ? 0 : auction.AuctionBids.Select(d => d.BidPrice).Max(),
            //        Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), auction.ImagePath))
            //    });
            //}

            //return Ok(response);
            return Ok(_db.Auctions.Include(c => c.AuctionBids).OrderBy(r => Guid.NewGuid()).Take(number).Select(c => new FeaturedAuctionItemsResponse
            {
                Id = c.Id,
                Name = c.ProductName,
                Description = c.ProductDescription,
                EndDate = c.AuctionEndDate,
                StartDate = c.AuctionStartDate,
                StartingBid = c.StartingBid,
                MarketValue = c.MarketValue,
                HigestBid = c.AuctionBids.Count == 0 ? 0 : c.AuctionBids.Select(d => d.BidPrice).Max(),
                Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), c.ImagePath))
            }));
        }
        [HttpGet("GetUserAuctionItems/{userId}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetUserAuctionItems(int userId)
        {
            if (!_db.Users.Any(c => c.Id == userId)) return BadRequest();

            var returnAuctions = _db.Users.Include(c => c.UserAuctions).ThenInclude(c => c.ItemCategories).ThenInclude(c => c.Category).ThenInclude(c => c.SubCategories).Where(c => c.Id == userId).Select(c => c.UserAuctions.Select(d => new FeaturedAuctionItemsResponse
            {
                Id = d.Id,
                Description = d.ProductDescription,
                StartDate = d.AuctionStartDate,
                EndDate = d.AuctionEndDate,
                Name = d.ProductName,
                Categories = d.ItemCategories.Select(c => c.Category.Name).ToList(),
                Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), d.ImagePath)),
                StartingBid = d.StartingBid,
                MarketValue = d.MarketValue,
            })).ToList();
            return Ok(

                returnAuctions

                );
        }

        [HttpGet("GetAllAuctions")]
        public async Task<ActionResult<object>> GetAllAuctions()
        {
            var auctions = _db.Auctions.Include(c => c.ItemCategories).ThenInclude(c => c.Category).ThenInclude(c => c.SubCategories).Include(c => c.AuctionBids);
            return Ok(
                auctions.Select(c => new
                {
                    Id = c.Id,
                    ProductName = c.ProductName,
                    Description = c.ProductDescription,
                    Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), c.ImagePath)),
                    StartingBid = c.StartingBid,
                    MarketValue = c.MarketValue,
                    HigestBid = c.AuctionBids.Count == 0 ? 0 : c.AuctionBids.Select(d => d.BidPrice).Max(),
                    Categories = c.ItemCategories.Select(d => new Category
                    {
                        Id = d.CategoryId,
                        Name = d.Category.Name,
                        SubCategories = d.Category.SubCategories.Select(e => new Models.SubCategory
                        {
                            Id = e.Id,
                            Name = e.Name
                        }).ToList()
                    })
                })
                );
        }
        [HttpDelete("DeleteAuction/{auctionId}/{userId}")]
        public async Task<ActionResult<bool>> DeleteAuction(int auctionId, int userId)
        {
            var auction = await _db.Auctions.FindAsync(auctionId);
            if (auction == null) return BadRequest();
            var user = _db.Users.Include(c => c.UserAuctions).FirstOrDefault(c => c.Id == userId);
            if (user == null) return BadRequest();
            user.UserAuctions.Remove(auction);

            await _db.SaveChangesAsync();
            return Ok(true);
        }
        [HttpGet("GetAuctionItemToBidWithId/{id}")]
        public async Task<ActionResult<object>> GetAuctionItemToBidWithId(int id)
        {
            var auction = await _db.Auctions.Include(c => c.AuctionBids).Include(c => c.ItemCategories).ThenInclude(c => c.Category).FirstOrDefaultAsync(c => c.Id == id);
            if (auction == null) return NotFound();

            var result = new
            {
                Id = auction.Id,
                Name = auction.ProductName,
                Description = auction.ProductDescription,
                StartDate = auction.AuctionStartDate,
                EndDate = auction.AuctionEndDate,
                Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), auction.ImagePath)),
                HigestBid = auction.AuctionBids.Count == 0 ? 0 : auction.AuctionBids.Select(d => d.BidPrice).Max()
            };
            return Ok(result);
        }
    }
}
