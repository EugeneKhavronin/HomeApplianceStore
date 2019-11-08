using System;
using System.Collections.Generic;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Models.Specifications;

namespace HomeApplianceStore.Domain.Models.Goods
{
    /// <summary>
    /// Модель изменения товара
    /// </summary>
    public class GoodsUpdateModel
    {
        GoodsUpdateModel()
        {
        }
        
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        public Guid Guid { get; set; }

        /// <summary>
        /// Вид товара
        /// </summary>
        public string Type { get; set; }

        /// <summary>
        /// Цена
        /// </summary>
        public int Price { get; set; }

        /// <summary>
        /// Производитель
        /// </summary>
        public string Manufacturer { get; set; }

        /// <summary>
        /// Место сборки
        /// </summary>
        public string AssemblyPlace { get; set; }

        /// <summary>
        /// Наличие
        /// </summary>
        public bool Availability { get; set; }

        /// <summary>
        /// Количество
        /// </summary>
        public int Quantity { get; set; }
        
        /// <summary>
        /// Спецификации
        /// </summary>
        public List<SpecificationCreateModel> Specifications { get; set; }
    }
}