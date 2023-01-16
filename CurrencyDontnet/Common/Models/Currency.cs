namespace Common.Models
{
    public record Currency(string Key, double CurrentExchangeRate, double CurrentChange, int unit, DateTime lastUpdate);
    public record ApiCurrencyResult(List<Currency> ExchangeRates);
}
