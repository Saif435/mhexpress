using API.DataAccess.IRepository;
using API.Models;
using API.Models.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ContactController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetAll()
        {
            if (_unitOfWork.Contact == null)
            {
                return NotFound();
            }
            var contact = await _unitOfWork.Contact.GetAll();
            return Ok(contact);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> Get(int id)
        {
            if (_unitOfWork.Contact == null)
            {
                return NotFound();
            }
            var contact = await _unitOfWork.Contact.GetById(u => u.Id == id);

            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        [HttpPost]
        public async Task<ActionResult<Contact>> Add(ContactPost contact)
        {
            var TimeNow = DateTime.UtcNow.AddHours(2).ToString("HH:mm");
            var DateNow = DateTime.Now.ToString("dd,MMMM,yyyy").Replace(",", " ");
            var message = new Contact()
            {
                Name = contact.Name,
                Email = contact.Email,
                Message = contact.Message,
                Date = DateNow,
                Time = TimeNow
            };

            _unitOfWork.Contact.Add(message);
            await _unitOfWork.SaveAsync();

            return Ok(message);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var contact = await _unitOfWork.Contact.GetById(u => u.Id == id);

            if (contact == null)
            {
                return NotFound();
            }

            _unitOfWork.Contact.Delete(contact);
            await _unitOfWork.SaveAsync();

            return Ok(contact);
        }
    }
}
