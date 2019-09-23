using System;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    public class Specifications
    {
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
        public Guid ValueGuid { get; set; }
    }
}