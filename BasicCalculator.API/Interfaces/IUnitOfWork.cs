namespace Calculators.API.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ICalculationRepository Calculations { get; }
        Task<int> CompleteAsync();
    }
}