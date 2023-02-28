using Microsoft.AspNetCore.Http;

namespace API.Models.Dtos
{
    public class ProductPut
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public IFormFile MyFile { get; set; }

    }
}
