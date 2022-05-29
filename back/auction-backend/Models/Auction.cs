namespace auction_backend.Models
{
    public class Auction
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public decimal StartingBid { get; set; }
        public decimal MarketValue { get; set; }
        public string AuctionStartDate { get; set; }
        public string AuctionEndDate { get; set; }
        public string ImagePath { get; set; }
        public List<Bid> AuctionBids { get; set; }
        public List<ItemCategories> ItemCategories { get; set; }
    }
}
