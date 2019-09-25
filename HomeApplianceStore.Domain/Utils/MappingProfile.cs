using System.Collections.Generic;
using AutoMapper;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Models.Client;
using HomeApplianceStore.Domain.Models.Goods;

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

            CreateMap<Goods, GoodsViewModel>();
            CreateMap<Goods, GoodsCreateModel>();
            CreateMap<Goods, GoodsUpdateModel>();
            CreateMap<GoodsViewModel, Goods>();
            CreateMap<GoodsCreateModel, Goods>();
            CreateMap<GoodsUpdateModel, Goods>();
        }
    }
}