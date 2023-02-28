namespace API.Utility.Services.Interfaces
{
    public interface IBunnyStorage
    {
        Task Upload(string fileName, Stream fileContent);
        Task<bool> Delete(string fileName);
    }
}
