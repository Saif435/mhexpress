using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class OrderHeader
    {
        [Key]
        public int OrderId { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string Suburb { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string OrderDate { get; set; }

        [Required]
        public string OrderTime { get; set; }

        [Required]
        public string OrderStatus { get; set; }

        [Required]
        public double SubTotal { get; set; }

        [Required]
        public double ShippingFee { get; set; }

        [Required]
        public double Total { get; set; }
    }
}
