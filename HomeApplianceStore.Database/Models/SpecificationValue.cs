using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс содержащий значения характеристик
    /// </summary>
    public class SpecificationValue
    {
        public SpecificationValue()
        {
        }

        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        public Guid Guid { get; set; }
        
        [ForeignKey("Specifications")]
        public Guid SpecificationGuid { get; set; }
        
        /// <summary>
        /// Значение характеристики
        /// </summary>
        public string Value { get; set; }
    }
}