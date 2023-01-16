namespace Common.Models
{
    public interface IAppSettings
    {
        public string ExternalApiUrl { get; set; }
    }

    public class AppSettings : IAppSettings
    {
        public string? ExternalApiUrl { get; set; }
    }
}
