using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;
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
            var orders = await _context.Orders.ToListAsync();

            return orders;
        }

        /// <inheritdoc />
        public async Task<Order> Get(Guid guid)
        {
            return await _context.Orders.FirstOrDefaultAsync(a => a.Guid == guid);
        }

        /// <inheritdoc />
        public async Task<Guid> Create(Order model)
        {
            _context.Entry(model).State = EntityState.Modified;
            _context.Orders.Add(model);
            foreach (var guid in model.GoodsGuids)
            {
                var goods = await _context.Goods.FirstOrDefaultAsync(a => a.Guid == guid);
                _context.Goods.Update(goods);
            }
            await _context.SaveChangesAsync();
            return model.Guid;
        }

        /// <inheritdoc />
        public async Task<Guid> Update(Order model)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(a => a.Guid == model.Guid);
            order.Guid = model.Guid;
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