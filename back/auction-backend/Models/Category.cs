﻿namespace auction_backend.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<SubCategory> SubCategories { get; set; }
        public List<ItemCategories> ItemCategories { get; set; }

    }
}
