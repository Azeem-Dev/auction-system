namespace auction_backend.Dtos
{
    public class GetAllCategoriesResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<SubCategory> subCategories { get; set; }

    }
    public class SubCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
