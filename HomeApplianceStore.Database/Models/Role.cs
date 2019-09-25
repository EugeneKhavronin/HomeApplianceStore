using System;
using System.ComponentModel.DataAnnotations;

namespace HomeApplianceStore.Database.Models
{
    /// <summary>
    /// Класс роли пользователя
    /// </summary>
    public class Role
    {
        /// <summary>
        /// Уникальный идентфикатор
        /// </summary>
        [Key]
        public Guid Guid { get; set; }
        
        /// <summary>
        /// Роль
        /// </summary>
        public string Name { get; set; }
        
        
    }
}