using API.DataAccess.Data;
using API.DataAccess.IRepository;
using API.Models;

namespace API.DataAccess.Repository
{
    public class FaqRepository : GenericRepository<Faq>, IFaq
    {
        private ApplicationDbContext _db;

        public FaqRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public void Update(Faq obj)
        {
            _db.Faqs.Update(obj);
        }
    }

}
