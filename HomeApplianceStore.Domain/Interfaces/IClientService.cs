using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Interfaces
{
    /// <summary>
    /// Сервис для работы с клиентами
    /// </summary>
    public interface IClientService
    {
        /// <summary>
        /// Получение всех клиентов
        /// </summary>
        /// <returns></returns>
        Task<List<Client>> GetAll();
        
        /// <summary>
        /// Получение клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task<Client> Get(Guid guid);
        
        /// <summary>
        /// Добавление клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        Task<Guid> Create(Client model);

        /// <summary>
        /// Изменение клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        Task<Guid> Update(Client model);

        /// <summary>
        /// Удаление клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task Delete(Guid guid);
    }
}