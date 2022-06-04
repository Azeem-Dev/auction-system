namespace auction_backend.Dtos
{
    public class FeaturedAuctionItemsResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public decimal HigestBid { get; set; }
        public byte[] Image { get; set; }
        public List<string> Categories { get; set; }
        public decimal StartingBid { get; set; }
        public decimal MarketValue { get; set; }
    }
}
