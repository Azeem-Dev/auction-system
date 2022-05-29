namespace auction_backend.Dtos
{
    public class AddBidToAuctionReq
    {
        public decimal BidAmount { get; set; }
        public int AuctionId { get; set; }
        public int UserId { get; set; }
    }
}
