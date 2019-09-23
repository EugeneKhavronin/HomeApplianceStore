using System.Threading.Tasks;
using HomeApplianceStore.Domain.Models;

namespace HomeApplianceStore.Domain.Interfaces
{
    /// <summary>
    /// Сервис аутентификации пользователя
    /// </summary>
    public interface IAuthenticationService
    {
        /// <summary>
        /// Аутентификация пользователя
        /// </summary>
        /// <param name="login">Логин</param>
        /// <param name="password">Пароль</param>
        /// <returns></returns>
        Task<AuthenticationResult> AuthenticateUser(string login, string password);
    }
}