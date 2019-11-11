using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    /// <summary>
    /// Контроллер заказов
    /// </summary>
    [Route("api/order")]
    public class OrderController
    {
        private readonly IOrderService _orderService;
        
        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        /// <summary>
        /// Получение заказов
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<Order>> GetOrders()
        {
            return await _orderService.GetAll();
        }

        /// <summary>
        /// Получение заказов
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpGet("{guid}")]
        public async Task<Order> GetOrder([FromRoute] Guid guid)
        {
            return await _orderService.Get(guid);
        }

        /// <summary>
        /// Создание заказа
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<Guid> CreateOrder([FromBody] Order order)
        {
            return await _orderService.Create(order);
        }

        /// <summary>
        /// Изменение заказа
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<Guid> UpdateOrder([FromBody] Order order)
        {
            return await _orderService.Update(order);
        }

        /// <summary>
        /// Удаление заказа
        /// </summary>
        /// <param name="guid"></param>
        /// <returns></returns>
        [HttpDelete]
        public async Task DeleteOrder([FromRoute] Guid guid)
        {
            await _orderService.Delete(guid);
        }
    }
}