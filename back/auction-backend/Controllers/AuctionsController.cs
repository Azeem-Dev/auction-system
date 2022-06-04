﻿using auction_backend.Dtos;
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
            var user = _db.Users.Include(c => c.UserAuctions).ThenInclude(c=>c.ItemCategories).FirstOrDefault(c => c.Id == req.UserId);
            if (user == null) return BadRequest();

            var selectedAuction = user.UserAuctions.FirstOrDefault(c => c.Id == req.Id);
            if(selectedAuction == null) return BadRequest();


            selectedAuction.ProductName = req.ProductName;
            selectedAuction.ProductDescription = req.ProductDescription;
            selectedAuction.AuctionStartDate = req.StartingDate;
            selectedAuction.AuctionEndDate = req.EndDate;
            selectedAuction.MarketValue = req.MarketValue;
            selectedAuction.StartingBid= req.StartingBid;
            selectedAuction.ImagePath = string.IsNullOrEmpty(req.ImagePath) ? selectedAuction.ImagePath : req.ImagePath;
            selectedAuction.ItemCategories.RemoveAll(c=>true);
            selectedAuction.ItemCategories.Add(new ItemCategories
            {
                CategoryId = req.CategoryId,
            });

            await _db.SaveChangesAsync();;
            return Ok();
        }


        [HttpGet("GetFeaturedAuctionItems/{number}")]
        public async Task<ActionResult<List<FeaturedAuctionItemsResponse>>> GetFeaturedItems([FromRoute] int number)
        {
            return Ok(_db.Auctions.Include(c => c.AuctionBids).OrderBy(r => Guid.NewGuid()).Take(number).Select(c => new FeaturedAuctionItemsResponse
            {
                Id = c.Id,
                Name = c.ProductName,
                Description = c.ProductDescription,
                EndDate = c.AuctionEndDate,
                StartDate = c.AuctionStartDate,
                //HigestBid = c.AuctionBids.Select(d => d.BidPrice).Max(),
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
                StartingBid= d.StartingBid,
                MarketValue=d.MarketValue,
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
    }
}
