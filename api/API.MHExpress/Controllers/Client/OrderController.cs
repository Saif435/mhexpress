using API.DataAccess.IRepository;
using API.Models;
using API.Models.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Client
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public OrderController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        [HttpPost]
        public async Task<ActionResult<OrderPost>> PostOrder([FromBody] Cart data)
        {
            var TimeNow = DateTime.UtcNow.AddHours(2).ToString("HH:mm");
            var DateNow = DateTime.Now.ToString("dd,MMMM,yyyy").Replace(",", " ");

            OrderHeader orderHeader = new()
            {
                Email = data.OrderInfo.Email,
                FirstName = data.OrderInfo.FirstName,
                LastName = data.OrderInfo.LastName,
                Address = data.OrderInfo.Address,
                Suburb = data.OrderInfo.Suburb,
                PhoneNumber = data.OrderInfo.PhoneNumber,
                OrderDate = DateNow,
                OrderTime = TimeNow,
                OrderStatus = "Approved",
                SubTotal = data.OrderInfo.SubTotal,
                ShippingFee = data.OrderInfo.ShippingFee,
                Total = data.OrderInfo.Total
            };

            _unitOfWork.OrderHeader.Add(orderHeader);
            await _unitOfWork.SaveAsync();


            foreach (var cart in data.Items)
            {
                OrderDetail orderDetail = new()
                {
                    OrderId = orderHeader.OrderId,
                    ProductId = cart.Id,
                    Quantity = cart.Quantity,
                    ProductTotal = cart.Quantity * cart.Price
                };

                _unitOfWork.OrderDetail.Add(orderDetail);
                await _unitOfWork.SaveAsync();
            }

            await _unitOfWork.SaveAsync();
            return Ok(orderHeader);

        }

        [HttpGet("orderVM/{id}")]
        public async Task<ActionResult<OrderGet>> GetOrder(int id)
        {
            var order = new OrderGet()
            {
                OrderHeader = await _unitOfWork.OrderHeader.GetById(u => u.OrderId == id),
                OrderDetail = await _unitOfWork.OrderDetail.GetAll(u => u.OrderId == id, includeProperties: "Product"),
            };


            return Ok(order);
        }

        [HttpGet("allorders")]
        public async Task<ActionResult<OrderHeader>> GetAllOrders()
        {
            IEnumerable<OrderHeader> orderHeaders;
            orderHeaders = await _unitOfWork.OrderHeader.GetAll();
            return Ok(orderHeaders);
        }


    }
}
