using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HomeApplianceStore.Domain.Interfaces;
using HomeApplianceStore.Domain.Models.Client;
using Microsoft.AspNetCore.Authorization;
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
        public async Task<List<ClientViewModel>> GetClients()
        {
            return await _clientService.GetAll();
        }

        /// <summary>
        /// Получение клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpGet("{guid}")]
        public async Task<ClientViewModel> GetClient([FromRoute] Guid guid)
        {
            return await _clientService.Get(guid);
        }

        /// <summary>
        /// Добавление клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<Guid> CreateClient([FromBody] ClientCreateModel model)
        {
            return await _clientService.Create(model);
        }

        /// <summary>
        /// Изменение клиента
        /// </summary>
        /// <param name="model">Модель клиента</param>
        /// <returns></returns>
        [HttpPut]
        public async Task<Guid> UpdateClient([FromBody] ClientUpdateModel model)
        {
            return await _clientService.Update(model);
        }

        /// <summary>
        /// Удаление клиента
        /// </summary>
        /// <param name="guid">Уникальный идентификатор</param>
        /// <returns></returns>
        [HttpDelete]
        public async Task DeleteClient([FromRoute] Guid guid)
        {
            await _clientService.Delete(guid);
        }
    }
}