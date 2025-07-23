using Microsoft.AspNetCore.Identity;

namespace BasicCalculator.API.Models
{
    public class ApplicationUser : IdentityUser<Guid> 
    {
        override
        public Guid Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public List<CalculationHistory> Calculations { get; set; }
    }
}