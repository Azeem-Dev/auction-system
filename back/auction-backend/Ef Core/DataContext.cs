using Microsoft.EntityFrameworkCore;

namespace auction_backend.Ef_Core
{
    public class DataContext : DbContext
    {
        public DataContext()
        {

        }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        //public DbSet<UserEntity> Users { get; set; }
        //public DbSet<LinkEntity> Links { get; set; }
        //public DbSet<CategoryEntity> Categories { get; set; }
        //public DbSet<LinkCategoryEntity> LinkCategories { get; set; }
        //public DbSet<SubCategoryEntity> SubCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }
}
