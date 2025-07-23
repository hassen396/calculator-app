using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace BasicCalculator.API.Models
{
    public class CalculationHistory
    {
        [Key]
        public Guid Id { get; set; }
        
        public string Expression { get; set; }

        public decimal Result { get; set; }

        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        public Guid UserId { get; set; }

        [JsonIgnore]
        public ApplicationUser User { get; set; }
    }
}