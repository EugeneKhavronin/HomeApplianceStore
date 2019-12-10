using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс характеристик
    /// </summary>
    public class Specifications
    {
        public Specifications()
        {
            SpecificationValue = new SpecificationValue();
        }

        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        public Guid Guid { get; set; }
        
        /// <summary>
        /// Название спецификации
        /// </summary>
        public string SpecificationName { get; set; }
        
        /// <summary>
        /// Уникальный идентификатор значения
        /// </summary>
        [ForeignKey("SpecificationValue")]
        public Guid ValueGuid { get; set; }
        
        [ForeignKey("Goods")]
        public Guid GoodsGuid { get; set; }

        /// <summary>
        /// Значение характеристики
        /// </summary>
        public SpecificationValue SpecificationValue { get; set; }
    }
}