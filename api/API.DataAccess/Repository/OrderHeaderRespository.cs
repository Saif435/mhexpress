using API.DataAccess.Data;
using API.DataAccess.IRepository;
using API.Models;

namespace API.DataAccess.Repository
{
    public class OrderHeaderRepository : GenericRepository<OrderHeader>, IOrderHeader
    {
        private ApplicationDbContext _db;

        public OrderHeaderRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

    }
}
