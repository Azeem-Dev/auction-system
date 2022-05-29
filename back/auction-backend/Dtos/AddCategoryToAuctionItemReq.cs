namespace auction_backend.Dtos
{
    public class AddCategoryToAuctionItemReq
    {
        public List<int> CategoryIds { get; set; }
        public int AuctionItemId { get; set; }
    }
}
