using System;
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
        
        public DbSet<Role> Roles { get; set; }
        
        public DbSet<Specifications> Specifications { get; set; }
        
        public DbSet<SpecificationValue> SpecificationValues { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var admin = new Client
            {
                Guid = Guid.NewGuid(),
                Login = "admin",
                Password = "123456",
                RoleGuid = Guid.Parse("11111111-1111-1111-1111-111111111111"),
                FullName = "Шульц Юлий Иванович",
                Address = "г. Орловский, ул. МКАД 28 км Дорога, дом 71, квартира 23",
                PhoneNumber = "+79238701251",
                Email = "dasdsa@fds.com"
            };
            admin.Password = _passwordHasher.HashPassword(admin, admin.Password);

            var user = new Client
            {
                Guid = Guid.NewGuid(),
                Login = "user",
                Password = "123456",
                RoleGuid = Guid.Parse("11111111-1111-1111-1111-111111111110"),
                FullName =  "Рустамова Лилиана Игоревна ",
                Address = "г. Чапаевск, ул. Тютчевская Аллея, дом 64, квартира 144",
                PhoneNumber = "+79728158587",
                Email = "hfgfhfg@hghg.com"
            };
            user.Password = _passwordHasher.HashPassword(user, user.Password);
            
            modelBuilder.Entity<Client>().HasData(
                user,
                admin
            );

            var roleadmin = new Role
            {
                Guid = Guid.Parse("11111111-1111-1111-1111-111111111111"),
                Name = "Admin"
            };
            
            var roleuser = new Role
            {
                Guid = Guid.Parse("11111111-1111-1111-1111-111111111110"),
                Name = "User"
            };
            
            modelBuilder.Entity<Role>().HasData(
                roleuser,
                roleadmin
            );
            
            base.OnModelCreating(modelBuilder);
        }
    }
}