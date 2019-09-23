using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Services;
using Microsoft.Extensions.DependencyInjection;

namespace HomeApplianceStore.Domain
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddScoped<IClientService, ClientService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}