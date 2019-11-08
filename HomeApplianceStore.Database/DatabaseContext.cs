using HomeApplianceStore.Database.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HomeApplianceStore.Database
{
    public class DatabaseContext : DbContext
    {
        private readonly IPasswordHasher<Client> _passwordHasher = new PasswordHasher<Client>();
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Goods> Goods { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Specifications> Specifications { get; set; }
        
        public DbSet<SpecificationValue> SpecificationValues { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}