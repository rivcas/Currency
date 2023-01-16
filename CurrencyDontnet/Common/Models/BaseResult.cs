using Common.Enums;

namespace Common.Models
{
    public record BaseResult<T>(bool IsError, MessageCode MessageCode, string? MessageDesc, T? Data);
}
