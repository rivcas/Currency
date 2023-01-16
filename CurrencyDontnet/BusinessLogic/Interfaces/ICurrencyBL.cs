using Common.Models;

namespace BusinessLogic.Interfaces
{
    public interface ICurrencyBL
    {
        Task<BaseResult<List<Currency>?>> GetCurrencies();
    }
}
