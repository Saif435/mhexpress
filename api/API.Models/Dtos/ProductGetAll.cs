namespace API.Models.Dtos
{
    public class ProductGetAll
    {
        public List<Product> Products { get; set; } = new List<Product>();
        public int TotalPages { get; set; }
        public int CurrentPage { get; set; }
        public int ItemsPerPage { get; set; }
        public int TotalItems { get; set; }

    }
}

