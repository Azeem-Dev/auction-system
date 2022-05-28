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
    }
}
