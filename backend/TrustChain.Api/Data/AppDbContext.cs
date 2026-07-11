using Microsoft.EntityFrameworkCore;
using TrustChain.Api.Models;

namespace TrustChain.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<DigitalAsset> DigitalAssets => Set<DigitalAsset>();

    public DbSet<VerificationHistory> VerificationHistories => Set<VerificationHistory>();
}
