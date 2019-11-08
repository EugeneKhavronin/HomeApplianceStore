using System;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Models.Specifications
{
    /// <summary>
    /// Модель характеристики
    /// </summary>
    public class SpecificationCreateModel
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        private Guid Guid { get; set; }
        
        /// <summary>
        /// Название спецификации
        /// </summary>
        public string SpecificationName { get; set; }
        
        /// <summary>
        /// Уникальный идентификатор значения
        /// </summary>
        public Guid ValueGuid { get; set; }

        /// <summary>
        /// Значение характеристики
        /// </summary>
        public SpecificationValueCreateModel SpecificationValue { get; set; }
    }
}