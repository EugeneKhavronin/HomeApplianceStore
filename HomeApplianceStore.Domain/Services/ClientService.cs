using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models.Client;
using Microsoft.EntityFrameworkCore;

namespace HomeApplianceStore.Domain.Services
{
    /// <inheritdoc />
    public class ClientService : IClientService
    {
        private readonly DatabaseContext _context;

        private readonly IMapper _mapper;

        /// <summary />
        public ClientService(DatabaseContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        /// <inheritdoc />
        public async Task<List<ClientViewModel>> GetAll()
        {
            var clients = await _context.Clients.ToListAsync();
            return _mapper.Map<List<Client>, List<ClientViewModel>>(clients);
        }

        /// <inheritdoc />
        public async Task<ClientViewModel> Get(Guid guid)
        {
            var client = await _context.Clients.FirstOrDefaultAsync(a => a.Guid == guid);
            return _mapper.Map<Client, ClientViewModel>(client);
        }

        /// <inheritdoc />
        public async Task<Guid> Create(ClientCreateModel model)
        {
            var createModel = _mapper.Map<Client>(model);
            _context.Clients.Add(createModel);
            await _context.SaveChangesAsync();
            return createModel.Guid;
        }

        /// <inheritdoc />
        public async Task<Guid> Update(ClientUpdateModel model)
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

        /// <inheritdoc />
        public async Task Delete(Guid guid)
        {
            var client = await _context.Clients.FirstOrDefaultAsync(a => a.Guid == guid);
            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();
        }
    }
}