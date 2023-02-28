using API.DataAccess.Data;
using API.DataAccess.IRepository;
using API.Models;

namespace API.DataAccess.Repository
{
    public class ProductRepository : GenericRepository<Product>, IProduct
    {
        private ApplicationDbContext _db;

        public ProductRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
    }

}
