namespace auction_backend.Dtos
{
    public class AddNewAuctionItemRequest
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public decimal StartingBid { get; set; }
        public decimal MarketValue { get; set; }
        public string StartingDate { get; set; }
        public string EndDate { get; set; }
        public string ImagePath { get; set; }
        public int UserId { get; set; }
        public int CategoryId { get; set; }
    }
}
