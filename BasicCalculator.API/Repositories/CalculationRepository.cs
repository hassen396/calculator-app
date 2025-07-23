using BasicCalculator.API.Data;
using BasicCalculator.API.Models;
using Calculators.API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Calculators.API.Repositories
{
    public class CalculationRepository : ICalculationRepository
    {
        private readonly ApplicationDbContext _context;

        public CalculationRepository(ApplicationDbContext context) 
            => _context = context;

        public async Task AddAsync(CalculationHistory history)
        {
            await _context.CalculationHistory.AddAsync(history);
        }

        // public Task AddAsync(CalculationHistory history)
        // {
        //     throw new NotImplementedException();
        // }

        public async Task<IEnumerable<CalculationHistory>> GetUserHistoryAsync(Guid userId)
        {
            return await _context.CalculationHistory
                .Where(c => c.UserId == userId)
                .OrderByDescending(c => c.Timestamp)
                .ToListAsync();
        }


    }
}