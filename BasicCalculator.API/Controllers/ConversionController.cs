using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace BasicCalculator.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UnitsController : ControllerBase
    {
        private readonly ILogger<UnitsController> _logger;

        public UnitsController(ILogger<UnitsController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Convert length units (meters, feet, inches, etc.)
        /// </summary>
        [HttpGet("length")]
        public ActionResult<decimal> ConvertLength(
            [Required] decimal value,
            [Required] string fromUnit,
            [Required] string toUnit)
        {
            try
            {
                var result = LengthConverter.Convert(value, fromUnit.ToLower(), toUnit.ToLower());
                return Ok(Math.Round(result, 6));
            }
            catch (ArgumentException ex)
            {
                _logger.LogWarning(ex, "Invalid unit conversion");
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Convert temperature units (Celsius, Fahrenheit, Kelvin)
        /// </summary>
        [HttpGet("temperature")]
        public ActionResult<decimal> ConvertTemperature(
            [Required] decimal value,
            [Required] string fromUnit,
            [Required] string toUnit)
        {
            try
            {
                var result = TemperatureConverter.Convert(value, fromUnit.ToLower(), toUnit.ToLower());
                return Ok(Math.Round(result, 2));
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /// <summary>
        /// Convert weight units (kg, lbs, oz, etc.)
        /// </summary>
        [HttpGet("weight")]
        public ActionResult<decimal> ConvertWeight(
            [Required] decimal value,
            [Required] string fromUnit,
            [Required] string toUnit)
        {
            try
            {
                var result = WeightConverter.Convert(value, fromUnit.ToLower(), toUnit.ToLower());
                return Ok(Math.Round(result, 4));
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }

    public static class LengthConverter
    {
        private static readonly Dictionary<string, decimal> _units = new()
        {
            // Meter as base unit
            { "m", 1m },
            { "km", 1000m },
            { "cm", 0.01m },
            { "mm", 0.001m },
            { "ft", 0.3048m },
            { "in", 0.0254m },
            { "mi", 1609.344m },
            { "yd", 0.9144m }
        };

        public static decimal Convert(decimal value, string fromUnit, string toUnit)
        {
            if (!_units.ContainsKey(fromUnit)) throw new ArgumentException($"Invalid source unit: {fromUnit}");
            if (!_units.ContainsKey(toUnit)) throw new ArgumentException($"Invalid target unit: {toUnit}");

            // Convert to meters first, then to target unit
            return value * _units[fromUnit] / _units[toUnit];
        }
    }

    public static class TemperatureConverter
    {
        public static decimal Convert(decimal value, string fromUnit, string toUnit)
        {
            return (fromUnit, toUnit) switch
            {
                // Celsius conversions
                ("c", "f") => value * 9 / 5 + 32,
                ("c", "k") => value + 273.15m,
                
                // Fahrenheit conversions
                ("f", "c") => (value - 32) * 5 / 9,
                ("f", "k") => (value - 32) * 5 / 9 + 273.15m,
                
                // Kelvin conversions
                ("k", "c") => value - 273.15m,
                ("k", "f") => (value - 273.15m) * 9 / 5 + 32,
                
                // Same unit
                _ when fromUnit == toUnit => value,
                
                _ => throw new ArgumentException($"Unsupported conversion: {fromUnit}→{toUnit}")
            };
        }
    }

    public static class WeightConverter
    {
        private static readonly Dictionary<string, decimal> _units = new()
        {
            // Kilogram as base unit
            { "kg", 1m },
            { "g", 0.001m },
            { "mg", 0.000001m },
            { "lb", 0.453592m },
            { "oz", 0.0283495m },
            { "ton", 907.185m } // US short ton
        };

        public static decimal Convert(decimal value, string fromUnit, string toUnit)
        {
            if (!_units.ContainsKey(fromUnit)) throw new ArgumentException($"Invalid source unit: {fromUnit}");
            if (!_units.ContainsKey(toUnit)) throw new ArgumentException($"Invalid target unit: {toUnit}");

            return value * _units[fromUnit] / _units[toUnit];
        }
    }
}