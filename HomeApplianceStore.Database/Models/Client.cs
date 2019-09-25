using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс клиента
    /// </summary>
    public class Client
    {
        /// <summary>
        /// Уникальный идентификатор
        /// </summary>
        [Key]
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