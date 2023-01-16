using BusinessLogic.Interfaces;
using Common.Enums;
using Common.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class CurrencyController : ControllerBase
    {
        private readonly ILogger<CurrencyController> _logger;
        private readonly ICurrencyBL _currencyBL;

        public CurrencyController(ILogger<CurrencyController> logger, ICurrencyBL currencyBL)
        {
            this._logger = logger;
            this._currencyBL = currencyBL;
        }

        [HttpGet(Name = "GetCurrencies")]
        public async Task<BaseResult<List<Currency>?>> GetCurrencies()
        {
            _logger.LogDebug($"GetCurrencies - start");

            try
            {
                // GetCurrencies
                BaseResult<List<Currency>?> result = await _currencyBL.GetCurrencies();

                if (result.IsError || result.MessageCode != MessageCode.Success)
                {
                    _logger.LogError($"GetCurrencies - error result - {result}");

                    return result with { MessageDesc = result.MessageDesc ?? Enumeration.GetEnumDescription(result.MessageCode) };
                }

                // End Successfully
                BaseResult<List<Currency>?> successResult = new BaseResult<List<Currency>?>(
                    false,
                    result.MessageCode,
                    Enumeration.GetEnumDescription(MessageCode.Success),
                    result.Data);

                _logger.LogDebug($"GetCurrencies - end successfully");

                return successResult;
            }
            catch (Exception ex)
            {
                var result = new BaseResult<List<Currency>?>(
                       true,
                       MessageCode.Unexpected,
                       Enumeration.GetEnumDescription(MessageCode.Unexpected),
                       null);

                _logger.LogCritical($"GetCurrencies error. {ex}");

                return result;
            }
        }
    }
}
