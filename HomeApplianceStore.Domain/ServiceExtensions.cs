using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Services;
using Microsoft.Extensions.DependencyInjection;

namespace HomeApplianceStore.Domain
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddScoped<IGoodsService, GoodsService>();

            return services;
        }
    }
}