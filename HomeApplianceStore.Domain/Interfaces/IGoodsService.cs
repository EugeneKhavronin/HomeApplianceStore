using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Interfaces
{
    /// <summary>
    /// Сервис для работы с товарами
    /// </summary>
    public interface IGoodsService
    {
        /// <summary>
        /// Получение всех товаров с заданным типом
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        Task<List<Goods>> GetAllByType(string type);
        
        /// <summary>
        /// Получение всех товаров с заданным производителем
        /// </summary>
        /// <param name="manufacturer"></param>
        /// <returns></returns>
        Task<List<Goods>> GetAllByManufacturer(string manufacturer);

        /// <summary>
        /// Получение всех товаров с заданной характеристикой
        /// </summary>
        /// <param name="specifications"></param>
        /// <returns></returns>
        List<Goods> GetAllBySpecification(List<Specifications> specification);
        
        /// <summary>
        /// Получение всех товаров
        /// </summary>
        /// <returns></returns>
        Task<List<Goods>> GetAll();
        
        /// <summary>
        /// Получение товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task<Goods> Get(Guid guid);
        
        /// <summary>
        /// Добавление товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        Task<Guid> Create(Goods model);

        /// <summary>
        /// Изменение товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        Task<Guid> Update(Goods model);

        /// <summary>
        /// Удаление товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task Delete(Guid guid, Guid guidSpec, Guid guidValue);
    }
}