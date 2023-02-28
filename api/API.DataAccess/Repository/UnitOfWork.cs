using API.DataAccess.Data;
using API.DataAccess.IRepository;

namespace API.DataAccess.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _db;

        public UnitOfWork(ApplicationDbContext db)
        {
            _db = db;
            Category = new CategoryRepository(_db);
            Product = new ProductRepository(_db);
            OrderHeader = new OrderHeaderRepository(_db);
            OrderDetail = new OrderDetailRepository(_db);
            Faq = new FaqRepository(_db);
            Contact = new ContactRepository(_db);
        }

        public ICategory Category { get; private set; }
        public IProduct Product { get; private set; }
        public IOrderHeader OrderHeader { get; private set; }
        public IOrderDetail OrderDetail { get; private set; }
        public IFaq Faq { get; private set; }
        public IContact Contact { get; private set; }

        public async Task SaveAsync()
        {
            await _db.SaveChangesAsync();
        }
    }
}
