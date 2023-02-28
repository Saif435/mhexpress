using API.Models;

namespace API.DataAccess.IRepository
{
    public interface IFaq : IGeneric<Faq>
    {
        void Update(Faq obj);
    }
}
