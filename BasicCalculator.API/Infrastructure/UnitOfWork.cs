using BasicCalculator.API.Data;
using Calculators.API.Interfaces;
using Calculators.API.Repositories;

namespace Calculators.API.Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public ICalculationRepository Calculations { get; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Calculations = new CalculationRepository(_context);
        }

        public async Task<int> CompleteAsync() => 
            await _context.SaveChangesAsync();

        public void Dispose() => 
            _context.Dispose();
    }
}