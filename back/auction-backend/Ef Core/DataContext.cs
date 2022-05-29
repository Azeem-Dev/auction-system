using auction_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace auction_backend.Ef_Core
{
    public class DataContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public DataContext()
        {

        }
        //public DataContext(IConfiguration configuration)
        //{
        //    _configuration = configuration;
        //}

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //var test = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer("Server=.;Database=AuctionSystem;Trusted_Connection=True;");
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ItemCategories>().HasKey(ic => new { ic.AuctionItemId, ic.CategoryId });
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Auction> Auctions { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<SubCategory> SubCategories { get; set; }
        public DbSet<Bid> Bids { get; set; }
        public DbSet<ItemCategories> ItemCategories { get; set; }
        


    }
}
