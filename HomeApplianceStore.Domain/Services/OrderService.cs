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
        public async Task<List<OrderViewModel>> GetAll()
        {
            var orders = await _context.Orders.ToListAsync();
            List<OrderViewModel> viewModel = new List<OrderViewModel>();
            foreach (var order in orders)
            {
                List<Goods> goods = new List<Goods>();
                _context.Orders.Select(a => a.GoodsGuids).FirstOrDefault()
                    ?.ForEach(async guid =>
                    {
                        goods.Add(await _context.Goods.FirstOrDefaultAsync(a => a.Guid == guid));
                    });
                var orderViewModel = new OrderViewModel
                {
                    ClientGuid = order.ClientGuid,
                    CurrentStatus = order.CurrentStatus,
                    DateTimeOrder = order.DateTimeOrder,
                    DeliveryTerms = order.DeliveryTerms,
                    Goods = goods,
                    TotalCost = order.TotalCost
                };
                viewModel.Add(orderViewModel);
            }
            
            
                
//            List<OrderViewModel> viewModel = new List<OrderViewModel>();
//            foreach (var order in orders)
//            {
//                foreach (var orderViewModel in viewModel)
//                {
//                    orderViewModel.Guid = order.Guid;
//                    orderViewModel.ClientGuid = order.ClientGuid;
//                    orderViewModel.CurrentStatus = order.CurrentStatus;
//                    orderViewModel.DeliveryTerms = order.CurrentStatus;
//                    orderViewModel.GoodsGuids = order.GoodsGuids;
//                    orderViewModel.TotalCost = order.TotalCost;
//                    orderViewModel.DateTimeOrder = order.DateTimeOrder;
//                    foreach (var guid in order.GoodsGuids)
//                    {
//                        var a = await _context.Goods.FindAsync(guid);
//                        orderViewModel.Goods.Add(a);
//                    }
//                    viewModel.Add(orderViewModel);
//                }
//            }
            return viewModel;
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