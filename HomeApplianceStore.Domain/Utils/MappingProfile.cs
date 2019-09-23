using AutoMapper;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Models.Client;

namespace HomeApplianceStore.Domain.Utils
{
    /// <summary>
    /// Профайл для automapper
    /// </summary>
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Client, ClientViewModel>();
            CreateMap<Client, ClientCreateModel>();
            CreateMap<Client, ClientUpdateModel>();
            CreateMap<ClientViewModel, Client>();
            CreateMap<ClientCreateModel, Client>();
            CreateMap<ClientUpdateModel, Client>();
        }
    }
}