using System;
using System.Security.Claims;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Principal;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using AutoMapper;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models;
using HomeApplianceStore.Domain.Models.Client;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace HomeApplianceStore.Domain.Services
{
    /// <inheritdoc/>
    public class AuthenticationService : IAuthenticationService
    {
        private readonly DatabaseContext _context;
        private readonly IPasswordHasher<Client> _passwordHasher = new PasswordHasher<Client>();
        private readonly IMapper _mapper;
        private readonly TokenManagement _tokenManagement;

        /// <summary/>
        public AuthenticationService(DatabaseContext context, IMapper mapper, IOptions<TokenManagement> tokenManagement)
        {
            _context = context;
            _mapper = mapper;
            _tokenManagement = tokenManagement.Value;
        }

        /// <inheritdoc/>
        public async Task<AuthenticationResult> AuthenticateUser(string login, string password)
        {
            var client = await _context.Clients.FirstOrDefaultAsync(a => a.Login == login);
            var verifyPasswordResult = _passwordHasher
                .VerifyHashedPassword(client, client.Password, password);
            
            if (client == null || verifyPasswordResult == PasswordVerificationResult.Failed)
                throw new InvalidOperationException("Неверный логин или пароль");

            var claim = new ClaimsIdentity(new GenericIdentity(client.Login), new[]
            {
                new Claim(ClaimTypes.NameIdentifier, client.Login)
            });

            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_tokenManagement.Secret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            
            var handler = new JwtSecurityTokenHandler();
            var token = handler.CreateJwtSecurityToken(subject: claim,
                signingCredentials: credentials,
                issuer: _tokenManagement.Issuer,
                audience: _tokenManagement.Audience,
                expires: DateTime.UtcNow.Add(_tokenManagement.LifeTime));

            Token tokenModel = new Token
            {
                Value = handler.WriteToken(token),
                ExpirationDate = token.ValidTo
            };
            
            return new AuthenticationResult(tokenModel, _mapper.Map<ClientViewModel>(client));
        }
    }
}