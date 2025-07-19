using Dangl.Calculator;
using Microsoft.AspNetCore.Mvc;
//made this namespace as Calculators because it will cause with the thired party libraty(Dangl.Calculator)
namespace Calculators.API.Controllers
{
    public class CalculationController : ControllerBase
    {
        /// <summary>
        /// Evaluates a mathematical expression and returns the result.
        /// </summary>
        /// <param name="expression">The mathematical expression to evaluate.</param>
        /// <returns>The result of the evaluated expression.</returns>
        [HttpGet("evaluate")]
        public IActionResult EvaluateExpression([FromQuery] string expression)
        {
            if (string.IsNullOrWhiteSpace(expression))
            {
                return BadRequest("Expression cannot be null or empty.");
            }

            try
            {
                var result = Calculator.Calculate(expression);
                return Ok(new { Result = result });
            }
            catch (Exception ex)
            {
                return BadRequest($"Error evaluating expression: {ex.Message}");
            }
        }
    }
}