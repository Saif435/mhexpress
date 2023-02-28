using API.DataAccess.Data;
using API.DataAccess.IRepository;
using API.Models;

namespace API.DataAccess.Repository
{
    public class CategoryRepository : GenericRepository<Category>, ICategory
    {
        private ApplicationDbContext _db;

        public CategoryRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Category obj)
        {
            _db.Categories.Update(obj);
        }

    }

}
