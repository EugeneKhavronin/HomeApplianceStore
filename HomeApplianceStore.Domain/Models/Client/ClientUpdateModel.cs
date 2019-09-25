using System;
using System.Collections.Generic;
using HomeApplianceStore.Database.Models;

namespace HomeApplianceStore.Domain.Models.Client
{
    /// <summary>
    /// Модель изменения клиента
    /// </summary>
    public class ClientUpdateModel
    {
        public ClientUpdateModel()
        {
        }

        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        public Guid Guid { get; set; }
        
        /// <summary>
        /// Роль пользователя
        /// </summary>
        public Guid RoleGuid { get; set; }
        
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