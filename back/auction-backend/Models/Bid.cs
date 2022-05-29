namespace auction_backend.Models
{
    public class Bid
    {
        public int Id { get; set; }
        public Auction Auction { get; set; }
        public int AuctionId { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public decimal BidPrice { get; set; }
    }
}
