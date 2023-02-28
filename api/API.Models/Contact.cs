using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        public string Time { get; set; }
    }
}
