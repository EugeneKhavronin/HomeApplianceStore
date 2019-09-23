using System;
using System.Collections.Generic;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Models.Enums;

namespace HomeApplianceStore.Domain.Models.Client
{
    /// <summary>
    /// Модель создания клиента
    /// </summary>
    public class ClientCreateModel
    {
        public ClientCreateModel()
        {
        }

        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        private Guid Guid { get; set; }

        /// <summary>
        /// Роль пользователя
        /// </summary>
        public Role Role { get; set; }
        
        /// <summary>
        /// Логин
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        /// Пароль
        /// </summary>
        public string Password { get; set; }

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