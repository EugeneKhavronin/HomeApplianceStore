using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeApplianceStore.Database;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HomeApplianceStore.Domain.Services
{
    /// <inheritdoc />
    public class GoodsService : IGoodsService
    {
        private readonly DatabaseContext _context;

        /// <summary />
        public GoodsService(DatabaseContext context)
        {
            _context = context;
        }

        /// <inheritdoc />
        public async Task<List<Goods>> GetAllByType(string type)
        {
            var goods = await _context.Goods.Where(a => a.Type == type).Include(a => a.Specifications)
                .ThenInclude(a => a.SpecificationValue).ToListAsync();
            return goods;
        }

        /// <inheritdoc />
        public async Task<List<Goods>> GetAllByManufacturer(string manufacturer)
        {
            return await _context.Goods.Where(a => a.Manufacturer == manufacturer).Include(a => a.Specifications)
                .ThenInclude(a => a.SpecificationValue).ToListAsync();
        }

        public List<Goods> GetAllBySpecification(List<Specifications> specification)
        {
            return _context.Goods
                .Where(a => a.Specifications.First().SpecificationName == specification.First().SpecificationName)
                .Include(a => a.Specifications)
                .ThenInclude(a => a.SpecificationValue)
                .ToList();
        }

        /// <inheritdoc />
        public async Task<List<Goods>> GetAll()
        {
            return await _context.Goods.Include(a => a.Specifications).ThenInclude(a => a.SpecificationValue)
                .ToListAsync();
        }

        /// <inheritdoc />
        public async Task<Goods> Get(Guid guid)
        {
            return await _context.Goods.Include(a => a.Specifications).ThenInclude(a => a.SpecificationValue)
                .FirstOrDefaultAsync(a => a.Guid == guid);
        }

        /// <inheritdoc />
        public async Task<Guid> Create(Goods model)
        {
            _context.Goods.Add(model);
            await _context.SaveChangesAsync();
            return model.Guid;
        }

        /// <inheritdoc />
        public async Task<Guid> Update(Goods model)
        {
            var goods = await _context.Goods.Include(a => a.Specifications)
                .ThenInclude(a => a.SpecificationValue).FirstOrDefaultAsync(a => a.Guid == model.Guid);
            goods.OrderGuid = model.OrderGuid;
            goods.Availability = model.Availability;
            goods.Guid = model.Guid;
            goods.Manufacturer = model.Manufacturer;
            goods.Price = model.Price;
            goods.Quantity = model.Quantity;
            _context.Entry(goods).State = EntityState.Modified;
            //goods.Specifications = model.Specifications;
            goods.Type = model.Type;
            goods.AssemblyPlace = model.AssemblyPlace;
            _context.Goods.Update(goods);
            await _context.SaveChangesAsync();
            return goods.Guid;
        }
        
        /// <inheritdoc />
        public async Task Delete(Guid guid, List<Guid> guidSpec, List<Guid> guidValue)
        {
            var goods = await _context.Goods.FirstOrDefaultAsync(a => a.Guid == guid);
            foreach (var guid1 in guidSpec)
            {
                var goodsSpec = await _context.Specifications.FirstOrDefaultAsync(a => a.Guid == guid1);
                _context.Specifications.Remove(goodsSpec);
            }

            foreach (var guid1 in guidValue)
            {
                var goodsSpecValue = await _context.SpecificationValues.FirstOrDefaultAsync(a => a.Guid == guid1);
                _context.SpecificationValues.Remove(goodsSpecValue);
            }
            _context.Goods.Remove(goods);
            await _context.SaveChangesAsync();
        }
    }
}