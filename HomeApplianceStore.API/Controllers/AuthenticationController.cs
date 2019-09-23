using System.Threading.Tasks;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    /// <summary>
    /// Крнтроллер аутентификации и выдачи токена
    /// </summary>
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authenticationService;

        /// <summary/>
        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        /// <summary>
        /// Авторизация
        /// </summary>
        /// <param name="login">Логин</param>
        /// <param name="password">Пароль</param>
        /// <returns></returns>
        [AllowAnonymous]
        [HttpPost, Route("Authentication")]
        public async Task<AuthenticationResult> Authenticate(string login, string password)
        {
            return await _authenticationService.AuthenticateUser(login, password);
        }
        
    }
}