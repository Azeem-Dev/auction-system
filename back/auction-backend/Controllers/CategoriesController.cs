﻿using auction_backend.Dtos;
using auction_backend.Ef_Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
            if (_db.Categories.Any(c => c.Name.ToLower() == name.ToLower())) return BadRequest();
            await _db.Categories.AddAsync(new Models.Category
            {
                Name = name.ToLower(),
            });
            await _db.SaveChangesAsync();
            return Ok();
        }
        [HttpPost("{id}")]
        public async Task<ActionResult<bool>> AddNewSubCategory(string name, int id)
        {
            if (!_db.Categories.Any(c => c.Id == id)) return BadRequest();
            var category = _db.Categories.Include(c => c.SubCategories).FirstOrDefault(c => c.Id == id);
            if (category != null && category.SubCategories != null)
            {
                if (category.SubCategories.Any(c => c.Name.ToLower() == name.ToLower())) return BadRequest();
            }
            _db.SubCategories.Add(new Models.SubCategory
            {
                Name = name.ToLower(),
                CategoryId = id
            });
            await _db.SaveChangesAsync();
            return Ok();
        }
        [HttpGet("GetAllCategories")]
        public async Task<ActionResult<List<GetAllCategoriesResponse>>> GetCategories()
        {
            return Ok(await _db.Categories.Include(c => c.SubCategories).Select(c => new { c.Id, c.Name, subcategories = c.SubCategories.Select(d => new { d.Id, d.Name }).ToList() }).ToListAsync());
        }
        [HttpPost("AddCategoryToAuctionItem")]
        public async Task<ActionResult<bool>> AddCategoryToAuctionItem(AddCategoryToAuctionItemReq req)
        {
            foreach (var categoryId in req.CategoryIds)
            {
                if (!_db.ItemCategories.Any(c => c.AuctionItemId == req.AuctionItemId && c.CategoryId == categoryId))
                {
                    await _db.ItemCategories.AddAsync(new Models.ItemCategories
                    {
                        AuctionItemId = req.AuctionItemId,
                        CategoryId = categoryId
                    });
                }

            }
            await _db.SaveChangesAsync();
            return Ok();

        }
        [HttpPost("UpdateAsCategory/{id}")]
        public async Task<ActionResult<bool>> UpdateAsCategory(string name, int id)
        {
            var subcategory = await _db.SubCategories.FirstOrDefaultAsync(c => c.Id == id);
            var newCategory = new Models.Category
            {
                Name = subcategory.Name,
            };
            _db.Categories.Add(newCategory);
            await _db.SaveChangesAsync();
            _db.SubCategories.Add(new Models.SubCategory
            {
                Name = name.ToLower(),
                CategoryId = newCategory.Id
            });
            await _db.SaveChangesAsync();
            _db.SubCategories.Remove(subcategory);
            await _db.SaveChangesAsync();
            return Ok(true);
        }
        [HttpGet("GetFeaturedProductsWithCategories")]
        public async Task<ActionResult<object>> GetFeaturedProductsWithCategories()
        {
            var categoryItems = _db.ItemCategories.Include(c => c.AuctionItem).Include(c => c.Category).OrderBy(r => Guid.NewGuid()).Take(3).Select(c => new
            {
                ProductName = c.AuctionItem.ProductName,
                ProductId = c.AuctionItemId,
                CategoryName = c.Category.Name,
                CategoryId = c.CategoryId,
                Image = System.IO.File.ReadAllBytes(Path.Join(Directory.GetCurrentDirectory(), c.AuctionItem.ImagePath))
            });
            return Ok(categoryItems);
        }

        [HttpGet("GetAuctionItemsByCategoryId/{id}")]
        public async Task<ActionResult<object>> GetAuctionItemsByCategoryId([FromRoute]int id)
        {
            //_db.ItemCategories.Inc
            return Ok();
        }
    }
}
