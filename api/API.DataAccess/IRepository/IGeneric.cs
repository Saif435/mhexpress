using System.Linq.Expressions;

namespace API.DataAccess.IRepository
{
    public interface IGeneric<T> where T : class
    {
        Task<T> GetById(Expression<Func<T, bool>> filter, string includeProperties = null);
        Task<IEnumerable<T>> GetAll(Expression<Func<T, bool>> filter = null, string includeProperties = null);
        void Add(T entity);
        void Delete(T entity);
        void RemoveRange(IEnumerable<T> entity);
    }
}
