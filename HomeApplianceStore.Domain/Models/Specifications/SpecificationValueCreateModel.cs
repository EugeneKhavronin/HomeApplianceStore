using System;

namespace HomeApplianceStore.Domain.Models.Specifications
{
    /// <summary>
    /// Модель создания значения для характеристики
    /// </summary>
    public class SpecificationValueCreateModel
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        public Guid Guid { get; set; }
        
        /// <summary>
        /// Значение характеристики
        /// </summary>
        public string Value { get; set; }
    }
}