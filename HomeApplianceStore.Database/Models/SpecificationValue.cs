using System;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс содержащий значения характеристик
    /// </summary>
    public class SpecificationValue
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        public Guid Guid { get; set; }
        
        /// <summary>
        /// Значение характеристики
        /// </summary>
        public string Value { get; set; }
    }
}