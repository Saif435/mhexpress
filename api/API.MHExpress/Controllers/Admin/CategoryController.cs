using API.DataAccess.IRepository;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetAll()
        {
            if (_unitOfWork.Category == null)
            {
                return NotFound();
            }
            var categories = await _unitOfWork.Category.GetAll();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> Get(int id)
        {
            if (_unitOfWork.Category == null)
            {
                return NotFound();
            }
            var category = await _unitOfWork.Category.GetById(u => u.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }


        [HttpPost]
        public async Task<ActionResult<Category>> Add(Category category)
        {
            _unitOfWork.Category.Add(category);
            await _unitOfWork.SaveAsync();

            return Ok(category);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Category>> Update(Category category)
        {
            _unitOfWork.Category.Update(category);
            await _unitOfWork.SaveAsync();
            return Ok(category);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Category>> Delete(int id)
        {

            var category = await _unitOfWork.Category.GetById(u => u.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            _unitOfWork.Category.Delete(category);
            await _unitOfWork.SaveAsync();

            return Ok(category);
        }

    }
}
