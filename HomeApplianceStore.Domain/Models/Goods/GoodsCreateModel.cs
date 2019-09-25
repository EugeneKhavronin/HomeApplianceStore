using System;
using System.Collections.Generic;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Models.Goods
{
    /// <summary>
    /// Модель создания товара
    /// </summary>
    public class GoodsCreateModel
    {
        GoodsCreateModel()
        {
        }
        
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        private Guid Guid { get; set; }

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
        public List<Specifications> Specifications { get; set; }
    }
}