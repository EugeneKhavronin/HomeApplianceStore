using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Models.Goods;

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
        Task<List<GoodsViewModel>> GetAllByType(string type);
        
        /// <summary>
        /// Получение всех товаров с заданным производителем
        /// </summary>
        /// <param name="manufacturer"></param>
        /// <returns></returns>
        Task<List<GoodsViewModel>> GetAllByManufacturer(string manufacturer);
        
        /// <summary>
        /// Получение всех товаров с заданной характеристикой
        /// </summary>
        /// <param name="specifications"></param>
        /// <returns></returns>
        Task<List<GoodsViewModel>> GetAllBySpecification(List<Specifications> specifications);
        
        /// <summary>
        /// Получение всех товаров
        /// </summary>
        /// <returns></returns>
        Task<List<GoodsViewModel>> GetAll();
        
        /// <summary>
        /// Получение товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task<GoodsViewModel> Get(Guid guid);
        
        /// <summary>
        /// Добавление товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        Task<Guid> Create(GoodsCreateModel model);

        /// <summary>
        /// Изменение товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        Task<Guid> Update(GoodsUpdateModel model);

        /// <summary>
        /// Удаление товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        Task Delete(Guid guid);
    }
}