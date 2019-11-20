using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HomeApplianceStore.Database.Models
{
    public class OrderViewModel
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        public Guid Guid { get; set; }

        /// <summary>
        /// Дата и время
        /// </summary>
        public DateTime DateTimeOrder { get; set; }
        
        /// <summary>
        /// Общая стоимость
        /// </summary>
        public int TotalCost { get; set; }

        /// <summary>
        /// Условия доставки
        /// </summary>
        public string DeliveryTerms { get; set; }

        /// <summary>
        /// Текущий статус
        /// </summary>
        public string CurrentStatus { get; set; }

        /// <summary>
        /// Идентификатор клиента
        /// </summary>
        public Guid ClientGuid { get; set; }
        
        /// <summary>
        /// Список уникальных идентификаторов товаров
        /// </summary>
        public List<Guid> GoodsGuids { get; set; }
        
        /// <summary>
        /// Список товаров
        /// </summary>
        public List<Goods> Goods { get; set; }
    }
}