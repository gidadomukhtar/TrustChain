using Microsoft.EntityFrameworkCore;
using TrustChain.Api.Data;

var builder = WebApplication.CreateBuilder(args);

// Services
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Middleware
app.UseCors("AllowAll");

// Disable HTTPS redirection during development
// app.UseHttpsRedirection();

app.UseStaticFiles();

// Home route
app.MapGet("/", () => Results.Ok(new
{
    Application = "TrustChain API",
    Version = "1.0.0",
    Status = "Running"
}));

app.MapControllers();

app.Run();