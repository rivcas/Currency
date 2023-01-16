using BusinessLogic;
using BusinessLogic.Interfaces;
using Common.Models;
using Microsoft.Extensions.Options;
using NLog.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddNLog();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddMemoryCache();

#region SECURITUY

builder.Services.AddCors(options =>
{
    string AllowedOrigins = builder.Configuration.GetValue<string>("AllowedOrigins") ?? "*";
    options.AddPolicy("_MyAllowSpecificOrigins",
        builder =>
        {
            builder.WithOrigins(AllowedOrigins).AllowAnyHeader();

        });
});

builder.Services.AddHsts(options =>
{
    options.Preload = true;
    options.IncludeSubDomains = true;
    options.MaxAge = TimeSpan.FromDays(120);
});
#endregion

#region Swagger
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
#endregion

#region ADD CUSTOM SERVICES - BL & HELPERS
builder.Services.AddScoped<ICurrencyBL, CurrencyBL>();
#endregion

#region AppSettings
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection(nameof(AppSettings)));
builder.Services.AddSingleton<IAppSettings>(sp => sp.GetRequiredService<IOptions<AppSettings>>().Value);
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
}
app.UseRouting();
app.UseHttpsRedirection();

app.UseCors("_MyAllowSpecificOrigins");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
