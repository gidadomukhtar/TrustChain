namespace TrustChain.Api.Models;

public class VerificationHistory
{
    public int Id { get; set; }

    public string AssetId { get; set; } = "";

    public string Status { get; set; } = "";

    public DateTime VerifiedAt { get; set; } = DateTime.Now;
}