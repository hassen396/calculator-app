using BasicCalculator.API.Models;

namespace Calculators.API.Interfaces
{
    public interface ICalculationRepository
    {
        Task AddAsync(CalculationHistory history);
        Task<IEnumerable<CalculationHistory>> GetUserHistoryAsync(Guid userId);
    }
}