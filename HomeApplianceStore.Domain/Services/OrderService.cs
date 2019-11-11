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
    public class OrderService : IOrderService
    {
        private readonly DatabaseContext _context;

        /// <summary />
        public OrderService(DatabaseContext context)
        {
            _context = context;
        }

        /// <inheritdoc />
        public async Task<List<Order>> GetAll()
        {
            return await _context.Orders.ToListAsync();
        }

        /// <inheritdoc />
        public async Task<Order> Get(Guid guid)
        {
            return await _context.Orders.FirstOrDefaultAsync(a => a.Guid == guid);
        }

        /// <inheritdoc />
        public async Task<Guid> Create(Order model)
        {
            _context.Orders.Add(model);
            await _context.SaveChangesAsync();
            return model.Guid;
        }

        /// <inheritdoc />
        public async Task<Guid> Update(Order model)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(a => a.Guid == model.Guid);
            order.Guid = model.Guid;
            order.Client = model.Client;
            order.Goods = model.Goods;
            order.CurrentStatus = model.CurrentStatus;
            order.DeliveryTerms = model.DeliveryTerms;
            order.TotalCost = model.TotalCost;
            order.DateTimeOrder = model.DateTimeOrder;
            _context.Orders.Update(order);
            await _context.SaveChangesAsync();
            return order.Guid;
        }

        /// <inheritdoc />
        public async Task Delete(Guid guid)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(a => a.Guid == guid);
            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }
    }
}