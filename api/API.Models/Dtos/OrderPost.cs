namespace API.Models.Dtos
{
    public class OrderPost
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Suburb { get; set; }
        public string PhoneNumber { get; set; }
        public double SubTotal { get; set; }
        public double ShippingFee { get; set; }
        public double Total { get; set; }
    }
}
