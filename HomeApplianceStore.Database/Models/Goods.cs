using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс товара
    /// </summary>
    public class Goods
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
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
        public List<Specifications> Specifications { get; set; }
    }
}