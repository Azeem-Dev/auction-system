namespace auction_backend.Models
{
    public class ItemCategories
    {
        public int Id { get; set; }
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public Auction AuctionItem { get; set; }
        public int AuctionItemId { get; set; }
    }
}
