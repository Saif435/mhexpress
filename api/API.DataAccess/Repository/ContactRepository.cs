using API.DataAccess.Data;
using API.DataAccess.IRepository;
using API.Models;

namespace API.DataAccess.Repository
{
    public class ContactRepository : GenericRepository<Contact>, IContact
    {
        private ApplicationDbContext _db;

        public ContactRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

    }
}
