using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Database.Models;
using HomeApplianceStore.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HomeApplianceStore.API.Controllers
{
    /// <summary>
    /// Контроллер клиентов
    /// </summary>
    [Route("api/client")]
    public class ClientController : Controller
    {
        private readonly IClientService _clientService;

        /// <summary/>
        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        /// <summary>
        /// Получение клиентов
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<List<Client>> GetClients()
        {
            return await _clientService.GetAll();
        }

        /// <summary>
        /// Получение клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpGet("{guid}")]
        public async Task<Client> GetClient([FromRoute] Guid guid)
        {
            return await _clientService.Get(guid);
        }

        /// <summary>
        /// Добавление клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<Guid> CreateClient([FromBody] Client model)
        {
            return await _clientService.Create(model);
        }

        /// <summary>
        /// Изменение клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        [HttpPut]
        public async Task<Guid> UpdateClient([FromBody] Client model)
        {
            return await _clientService.Update(model);
        }

        /// <summary>
        /// Удаление клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpDelete]
        public async Task DeleteClient([FromQuery] Guid guid)
        {
            await _clientService.Delete(guid);
        }
    }
}