using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models.Goods;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    /// <summary>
    /// Контроллер товаров
    /// </summary>
    [Route("api/goods")]
    public class GoodsController : Controller
    {
        private readonly IGoodsService _goodsService;

        /// <summary/>
        public GoodsController(IGoodsService goodsService)
        {
            _goodsService = goodsService;
        }

        /// <summary>
        /// Получение товаров по заданному типу
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("{type}/Type")]
        public async Task<List<GoodsViewModel>> GetGoodsByType(string type)
        {
            return await _goodsService.GetAllByType(type);
        }
        
        /// <summary>
        /// Получение товаров по заданному типу
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("{manufacturer}/Manufacturer")]
        public async Task<List<GoodsViewModel>> GetGoodsByManufacturer(string manufacturer)
        {
            return await _goodsService.GetAllByManufacturer(manufacturer);
        }
        
        /// <summary>
        /// Получение товаров по заданному типу
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("{specifications}/Specifications")]
        public async Task<List<GoodsViewModel>> GetGoodsBySpecifications(List<Specifications> specifications)
        {
            return await _goodsService.GetAllBySpecification(specifications);
        }
        
        /// <summary>
        /// Получение товаров
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<GoodsViewModel>> GetGoods()
        {
            return await _goodsService.GetAll();
        }

        /// <summary>
        /// Получение товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpGet("{guid}")]
        public async Task<GoodsViewModel> GetGoods([FromRoute] Guid guid)
        {
            return await _goodsService.Get(guid);
        }

        /// <summary>
        /// Добавление товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<Guid> CreateGoods([FromBody] GoodsCreateModel model)
        {
            return await _goodsService.Create(model);
        }

        /// <summary>
        /// Изменение товара
        /// </summary>
        /// <param name="model">Модель товара</param>
        /// <returns></returns>
        [HttpPut]
        public async Task<Guid> UpdateGoods([FromBody] GoodsUpdateModel model)
        {
            return await _goodsService.Update(model);
        }

        /// <summary>
        /// Удаление товара
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpDelete]
        public async Task DeleteGoods([FromRoute] Guid guid)
        {
            await _goodsService.Delete(guid);
        }
    }
}