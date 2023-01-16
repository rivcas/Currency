using BusinessLogic.Interfaces;
using Common.Enums;
using Common.Models;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BusinessLogic
{
    public class CurrencyBL : ICurrencyBL
    {
        private readonly ILogger<CurrencyBL> _logger;
        private readonly IAppSettings _appSettings;
        public CurrencyBL(ILogger<CurrencyBL> logger, IAppSettings appSettings)
        {
            _logger = logger;
            _appSettings = appSettings;
        }

        public async Task<BaseResult<List<Currency>?>> GetCurrencies()
        {
            try
            {
                var url = _appSettings.ExternalApiUrl;

                if (string.IsNullOrEmpty(url))
                {
                    throw new Exception("externalApiUrl config was not found");
                }

                using (HttpClient client = new HttpClient())
                {
                    client.BaseAddress = new Uri(url);

                    HttpResponseMessage getResult = await client.GetAsync(url);

                    if (getResult.IsSuccessStatusCode)
                    {
                        var res = await getResult.Content.ReadAsStringAsync();
                        var data = JsonConvert.DeserializeObject<ApiCurrencyResult>(res);

                        if (data is not null)
                        {
                            if (data.ExchangeRates.Any())
                            {
                                return new BaseResult<List<Currency>?>(
                                                                false,
                                                                MessageCode.Success,
                                                                MessageDesc: null,
                                                                data?.ExchangeRates);
                            }

                            return new BaseResult<List<Currency>?>(
                                true,
                                MessageCode.NoResult,
                                null,
                                null);
                        }
                    }

                    return (new BaseResult<List<Currency>?>(true, MessageCode.General, null, null));
                }
            }
            catch (Exception ex)
            {
                var result = new BaseResult<List<Currency>?>(
                       true,
                       MessageCode.Unexpected,
                       ex.Message,
                       null);

                _logger.LogCritical($"GetCurrencies error. {ex}");

                return result;
            }
        }
    }
}