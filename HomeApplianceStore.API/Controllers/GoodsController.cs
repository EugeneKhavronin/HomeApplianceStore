using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models.Goods;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    /// <summary>
    /// Контроллер товаров
    /// </summary>
    [Route("api/goods")]
    [Authorize]
    public class GoodsController : Controller
    {
        private readonly IGoodsService _goodsService;

        /// <summary/>
        public GoodsController(IGoodsService goodsService)
        {
            _goodsService = goodsService;
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