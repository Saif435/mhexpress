namespace API.DataAccess.IRepository
{
    public interface IUnitOfWork
    {
        ICategory Category { get; }
        IProduct Product { get; }
        IOrderHeader OrderHeader { get; }
        IOrderDetail OrderDetail { get; }
        IFaq Faq { get; }
        IContact Contact { get; }
        Task SaveAsync();
    }
}
