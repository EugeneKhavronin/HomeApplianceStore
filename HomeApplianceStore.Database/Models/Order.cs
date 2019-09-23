using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс заказа
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
        public Guid Guid { get; set; }

        /// <summary>
        /// Дата и время
        /// </summary>
        public DateTime DateTimeOrder { get; set; }

        /// <summary>
        /// Заказчик
        /// </summary>
        public Client Client { get; set; }

        /// <summary>
        /// Товары
        /// </summary>
        public List<Goods> Goods { get; set; }

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
    }
}