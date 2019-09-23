using System;

namespace HomeApplianceStore.Domain.Models
{
    /// <summary>
    /// Модель токена
    /// </summary>
    public class Token
    {
        /// <summary>
        /// Токен
        /// </summary>
        public string Value { get; set; }
        
        /// <summary>
        /// Дата окончания действия
        /// </summary>
        public DateTime ExpirationDate { get; set; }
    }
}