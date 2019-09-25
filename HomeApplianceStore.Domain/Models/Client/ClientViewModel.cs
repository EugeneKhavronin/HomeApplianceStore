using System;
using System.Collections.Generic;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Models.Client
{
    /// <summary>
    /// Модель вывода клиента
    /// </summary>
    public class ClientViewModel
    {
        public ClientViewModel()
        {
        }

        /// <summary>
        /// Роль пользователя
        /// </summary>
        public Guid RoleGuid { get; set; }

        /// <summary>
        /// ФИО
        /// </summary>
        public string FullName { get; set; }

        /// <summary>
        /// Адрес
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// Номер телефона
        /// </summary>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// E-mail
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Заказы
        /// </summary>
        public List<Order> Orders { get; set; }
    }
}