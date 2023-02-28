namespace API.Models.Dtos
{
    public class ProductGet
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public string ImageUrl { get; set; }

        public string CategoryName { get; set; }
    }
}
