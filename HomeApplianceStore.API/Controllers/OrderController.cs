using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    [Route("api/order")]
    public class OrderController
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet]
        public async Task<List<Order>> GetOrders()
        {
            return await _orderService.GetAll();
        }

        [HttpGet("{guid}")]
        public async Task<Order> GetOrder([FromRoute] Guid guid)
        {
            return await _orderService.Get(guid);
        }

        [HttpPost]
        public async Task<Guid> CreateOrder([FromBody] Order order)
        {
            return await _orderService.Create(order);
        }

        [HttpPut]
        public async Task<Guid> UpdateOrder([FromBody] Order order)
        {
            return await _orderService.Update(order);
        }

        [HttpDelete]
        public async Task DeleteOrder([FromRoute] Guid guid)
        {
            await _orderService.Delete(guid);
        }
    }
}