using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models.Goods;
using Microsoft.EntityFrameworkCore;

namespace HomeApplianceStore.Domain.Services
{
    /// <inheritdoc />
    public class GoodsService : IGoodsService
    {
        private readonly DatabaseContext _context;

        private readonly IMapper _mapper;

        /// <summary />
        public GoodsService(DatabaseContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        /// <inheritdoc />
        public async Task<List<GoodsViewModel>> GetAllByType(string type)
        {
            var goods = await _context.Goods.Where(a=>a.Type==type).ToListAsync();
            return _mapper.Map<List<Goods>, List<GoodsViewModel>>(goods);
        }
        
        /// <inheritdoc />
        public async Task<List<GoodsViewModel>> GetAllByManufacturer(string manufacturer)
        {
            var goods = await _context.Goods.Where(a=>a.Manufacturer==manufacturer).ToListAsync();
            return _mapper.Map<List<Goods>, List<GoodsViewModel>>(goods);
        }
        
        /// <inheritdoc />
        public async Task<List<GoodsViewModel>> GetAllBySpecification(List<Specifications> specifications)
        {
            var goods = await _context.Goods.Where(a=>a.Specifications==specifications).ToListAsync();
            return _mapper.Map<List<Goods>, List<GoodsViewModel>>(goods);
        }
        
        /// <inheritdoc />
        public async Task<List<GoodsViewModel>> GetAll()
        {
            var goods = await _context.Goods.ToListAsync();
            return _mapper.Map<List<Goods>, List<GoodsViewModel>>(goods);
        }
        
        /// <inheritdoc />
        public async Task<GoodsViewModel> Get(Guid guid)
        {
            var goods = await _context.Goods.FirstOrDefaultAsync(a => a.Guid == guid);
            return _mapper.Map<Goods, GoodsViewModel>(goods);
        }
        
        /// <inheritdoc />
        public async Task<Guid> Create(GoodsCreateModel model)
        {
            var createModel = _mapper.Map<Goods>(model);
            _context.Goods.Add(createModel);
            await _context.SaveChangesAsync();
            return createModel.Guid;
        }
        
        /// <inheritdoc />
        public async Task<Guid> Update(GoodsUpdateModel model)
        {
            var goods = await _context.Goods.FirstOrDefaultAsync(a => a.Guid == model.Guid);
            goods.Availability = model.Availability;
            goods.Guid = model.Guid;
            goods.Manufacturer = model.Manufacturer;
            goods.Price = model.Price;
            goods.Quantity = model.Quantity;
            goods.Specifications = model.Specifications;
            goods.Type = model.Type;
            goods.AssemblyPlace = model.AssemblyPlace;
            _context.Goods.Update(goods);
            await _context.SaveChangesAsync();
            return goods.Guid;
        }
        
        /// <inheritdoc />
        public async Task Delete(Guid guid)
        {
            var goods = await _context.Goods.FirstOrDefaultAsync(a => a.Guid == guid);
            _context.Goods.Remove(goods);
            await _context.SaveChangesAsync();
        }
    }
}