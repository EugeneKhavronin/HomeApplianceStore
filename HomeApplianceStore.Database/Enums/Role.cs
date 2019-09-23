using System;
using System.ComponentModel;

namespace HomeApplianceStore.Database.Enums
{
    /// <summary>
    /// Enum с ролями пользователей
    /// </summary>
    public enum Role
    {
        [Description("User")]
        User = 0,
        
        [Description("Admin")]
        Admin = 1
    }
}