using API.Models;

namespace API.DataAccess.IRepository
{
    public interface ICategory : IGeneric<Category>
    {
        void Update(Category obj);
    }

}
