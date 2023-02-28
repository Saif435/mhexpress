using API.DataAccess.IRepository;
using API.Models;
using API.Models.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Client
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductGetController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProductGetController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet("{category}/{page}")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts(string category, int page)
        {
            if (category == "all")
            {
                return await GetAllProducts(page);
            }
            else
            {
                return await GetProductsByCategory(category, page);
            };
        }

        [HttpGet("GetAllProducts")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAllProducts(int page)
        {

            if (_unitOfWork.Product == null)
            {
                return NotFound();
            }

            var products = await _unitOfWork.Product.GetAll(includeProperties: "Category");
            var totalItems = products.Count();
            var pageResults = 8f;
            var pageCount = Math.Ceiling(totalItems / pageResults);
            var productPage = products
                              .Skip((page - 1) * (int)pageResults)
                              .Take((int)pageResults)
                              .ToList();

            var response = new ProductGetAll
            {
                Products = productPage,
                CurrentPage = page,
                TotalPages = (int)pageCount,
                ItemsPerPage = (int)pageResults,
                TotalItems = totalItems
            };

            return Ok(response);
        }

        [HttpGet("GetProductsByCategory")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductsByCategory(string category, int page)
        {

            if (_unitOfWork.Product == null)
            {
                return NotFound();
            }

            var products = await _unitOfWork.Product.GetAll(c => c.Category.Name.ToLower() == category.ToLower(), includeProperties: "Category");
            var totalItems = products.Count();
            var pageResults = 4f;
            var pageCount = Math.Ceiling(totalItems / pageResults);
            var productPage = products
                              .Skip((page - 1) * (int)pageResults)
                              .Take((int)pageResults)
                              .ToList();

            var response = new ProductGetAll
            {
                Products = productPage,
                CurrentPage = page,
                TotalPages = (int)pageCount,
                ItemsPerPage = (int)pageResults,
                TotalItems = totalItems
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            if (_unitOfWork.Product == null)
            {
                return NotFound();
            }
            var product = await _unitOfWork.Product.GetById(u => u.Id == id, includeProperties: "Category");

            if (product == null)
            {
                return NotFound();
            }

            var productDto = new ProductGet
            {
                Id = product.Id,
                Title = product.Title,
                Description = product.Description,
                Price = product.Price,
                ImageUrl = product.ImageUrl,
                CategoryName = product.Category.Name
            };

            return Ok(productDto);
        }

    }
}
