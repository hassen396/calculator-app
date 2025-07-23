using System.Security.Claims;
using BasicCalculator.API.Models;
using Calculators.API.Interfaces;
using Dangl.Calculator;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


//made this namespace as Calculators because it will cause with the thired party libraty(Dangl.Calculator)
namespace BasicCalculator.API.Controllers
{

    public class CalculationController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<CalculationController> _logger;
        private readonly UserManager<ApplicationUser> _userManager;

        public CalculationController(
            IUnitOfWork unitOfWork,
            ILogger<CalculationController> logger, UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _userManager = userManager;
        }


        /// <summary>
        /// Evaluates a mathematical expression and returns the result.
        /// </summary>
        /// <param name="expression">The mathematical expression to evaluate.</param>
        /// <returns>The result of the evaluated expression.</returns>


        // [HttpGet("evaluate")]
        // public IActionResult EvaluateExpression([FromQuery] string expression)
        // {
        //     if (string.IsNullOrWhiteSpace(expression))
        //     {
        //         return BadRequest("Expression cannot be null or empty.");
        //     }

        //     try
        //     {
        //         var result = Calculator.Calculate(expression);
        //         return Ok(new { Result = result });
        //     }
        //     catch (Exception ex)
        //     {
        //         return BadRequest($"Error evaluating expression: {ex.Message}");
        //     }
        // }

        [HttpPost("evaluate")]
        // [Authorize]
        public async Task<IActionResult> Evaluate([FromBody] string expression)
        {
            Console.WriteLine(User.Identity?.IsAuthenticated);

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
                return BadRequest("no user detected");
            Guid userId = user.Id;
            try
            {
                var calculation = Calculator.Calculate(expression);
                if (!calculation.IsValid)
                    return BadRequest(calculation.ErrorMessage);

                var history = new CalculationHistory
                {
                    Expression = expression,
                    Result = (decimal)calculation.Result,
                    UserId = userId
                };

                await _unitOfWork.Calculations.AddAsync(history);
                await _unitOfWork.CompleteAsync();

                return Ok(new
                {
                    Result = calculation.Result,
                    HistoryId = history.Id,
                    IsValid = calculation.IsValid,
                    calculation.ErrorMessage
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Calculation failed");
                return StatusCode(500);
            }
        }

        [HttpGet("history")]
        public async Task<IActionResult> GetHistory()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userId == null)
                return BadRequest("login to see your history");
            var history = await _unitOfWork.Calculations
                .GetUserHistoryAsync(Guid.Parse(userId));

            return Ok(history);
        }
    }
}