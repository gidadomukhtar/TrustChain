using System.ComponentModel.DataAnnotations;

namespace TrustChain.Api.Models;

public class DigitalAsset
{
    public int Id { get; set; }

    public string AssetId { get; set; } = Guid.NewGuid().ToString();

    [Required]
    public string Title { get; set; } = "";

    public string OwnerName { get; set; } = "";

    public string AssetType { get; set; } = "";

    public string Issuer { get; set; } = "";

    public string Description { get; set; } = "";

    public string FileName { get; set; } = "";

    public string FileHash { get; set; } = "";

    public DateTime IssueDate { get; set; } = DateTime.Now;

    public bool Verified { get; set; } = true;
}