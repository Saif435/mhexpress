using API.Models.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API.Models
{
    public class Cart
    {
        public OrderPost OrderInfo{ get; set; }
        public List<CartItem> Items { get; set; } = new List<CartItem>();
    }
}
