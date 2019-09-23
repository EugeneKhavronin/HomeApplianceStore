using System;
using HomeApplianceStore.Database.Enums;
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var admin = new Client
            {
                Guid = Guid.NewGuid(),
                Login = "admin",
                Password = "123456",
                Role = Role.Admin,
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
                Role = Role.User,
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
            
            base.OnModelCreating(modelBuilder);
        }
    }
}