using API.DataAccess.IRepository;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaqController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FaqController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Faq>>> GetAll()
        {
            if (_unitOfWork.Faq == null)
            {
                return NotFound();
            }

            var faqs = await _unitOfWork.Faq.GetAll();
            return Ok(faqs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Faq>> Get(int id)
        {
            if (_unitOfWork.Faq == null)
            {
                return NotFound();
            }

            var faq = await _unitOfWork.Faq.GetById(u => u.Id == id);

            if (faq == null)
            {
                return NotFound();
            }

            return Ok(faq);
        }


        [HttpPost]
        public async Task<ActionResult<Faq>> Add(Faq faq)
        {
            _unitOfWork.Faq.Add(faq);
            await _unitOfWork.SaveAsync();

            return Ok(faq);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Faq>> Update(Faq faq)
        {
            _unitOfWork.Faq.Update(faq);
            await _unitOfWork.SaveAsync();
            return Ok(faq);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Faq>> Delete(int id)
        {

            var faq = await _unitOfWork.Faq.GetById(u => u.Id == id);

            if (faq == null)
            {
                return NotFound();
            }

            _unitOfWork.Faq.Delete(faq);
            await _unitOfWork.SaveAsync();

            return Ok(faq);
        }

    }
}
