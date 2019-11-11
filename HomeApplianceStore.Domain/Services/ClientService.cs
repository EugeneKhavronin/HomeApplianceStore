using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HomeApplianceStore.Domain.Services
{
    /// <inheritdoc />
    public class ClientService : IClientService
    {
        private readonly DatabaseContext _context;

        /// <summary />
        public ClientService(DatabaseContext context)
        {
            _context = context;
        }

        /// <inheritdoc />
        public async Task<List<Client>> GetAll()
        {
            return await _context.Clients.Include(a => a.Orders).ThenInclude(a => a.Goods).ThenInclude(a => a.Specifications).ThenInclude(a => a.SpecificationValue).ToListAsync();
        }

        /// <inheritdoc />
        public async Task<Client> Get(Guid guid)
        {
            return await _context.Clients.Include(a => a.Orders).ThenInclude(a => a.Goods).ThenInclude(a => a.Specifications).ThenInclude(a => a.SpecificationValue).FirstOrDefaultAsync(a => a.Guid == guid);
        }

        /// <inheritdoc />
        public async Task<Guid> Create(Client model)
        {
            _context.Clients.Add(model);
            await _context.SaveChangesAsync();
            return model.Guid;
        }

        /// <inheritdoc />
        public async Task<Guid> Update(Client model)
        {
            var client = await _context.Clients.FirstOrDefaultAsync(a => a.Guid == model.Guid);
            client.Address = model.Address;
            client.Email = model.Email;
            client.Orders = model.Orders;
            client.FullName = model.FullName;
            client.PhoneNumber = model.PhoneNumber;
            _context.Clients.Update(client);
            await _context.SaveChangesAsync();
            return client.Guid;
        }

        //????
        /// <inheritdoc />
        public async Task Delete(Guid guid)
        {
            var client = await _context.Clients.FirstOrDefaultAsync(a => a.Guid == guid);
            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();
        }
    }
}