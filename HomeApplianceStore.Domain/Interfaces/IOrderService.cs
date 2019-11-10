using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Interfaces
{
    /// <summary>
    /// Сервис для работы с заказами
    /// </summary>
    public interface IOrderService
    {
        /// <summary>
        /// Получение всех заказов
        /// </summary>
        /// <returns></returns>
        Task<List<Order>> GetAll();
        
        /// <summary>
        /// Получение заказа
        /// </summary>
        /// <returns></returns>
        Task<Order> Get(Guid guid);
        
        /// <summary>
        /// Добавление заказа
        /// </summary>
        /// <param name="model">Модель заказа</param>
        /// <returns></returns>
        Task<Guid> Create(Order model);
        
        /// <summary>
        /// Изменение заказа
        /// </summary>
        /// <param name="model">Модель заказа</param>
        /// <returns></returns>
        Task<Guid> Update(Order model);

        /// <summary>
        /// Удаление заказа
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task Delete(Guid guid);
    }
}