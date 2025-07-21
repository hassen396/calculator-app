using System.ComponentModel.DataAnnotations;

namespace BasicCalculator.API.DTOs
{
    public class RegisterDto
    {
        [DataType("Email")]
        public required string Email { get; set; }

        [DataType(DataType.Password)]
        public required string Password { get; set; }
    }
}