using System.IdentityModel.Tokens.Jwt;
using HomeApplianceStore.Domain.Models.Client;

namespace HomeApplianceStore.Domain.Models
{
    /// <summary>
    /// Результат аутентификации
    /// </summary>
    public class AuthenticationResult
    {
        /// <summary>
        /// Токен авторизации
        /// </summary>
        public Token Token { get; set; }

        /// <summary>
        /// Модель клиента
        /// </summary>
        public ClientViewModel Client { get; set; }

        /// <summary/>
        public AuthenticationResult(Token token, ClientViewModel client)
        {
            Token = token;
            Client = client;
        }
    }
}