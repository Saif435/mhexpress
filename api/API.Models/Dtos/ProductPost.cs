using Microsoft.AspNetCore.Http;

namespace API.Models.Dtos
{
    public class ProductPost
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public int Category { get; set; }

        public IFormFile MyFile { get; set; }
    }
}
