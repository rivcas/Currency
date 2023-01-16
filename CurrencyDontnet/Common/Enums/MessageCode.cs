using System.ComponentModel;

namespace Common.Enums
{
    public enum MessageCode
    {
        [Description("Unexpected Error")]
        Unexpected = -1,

        [Description("Success")]
        Success = 0,

        [Description("General")]
        General = 1,

        [Description("NoResult")]
        NoResult = 2,
    }
}
