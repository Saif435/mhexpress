using API.DataAccess.IRepository;
using API.Models;
using API.Models.Dtos;
using API.Utility.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Admin
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBunnyStorage _bunnyStorage;
        private readonly IConfiguration _config;
        private readonly string _imageLink;

        public ProductController(IUnitOfWork unitOfWork, IBunnyStorage bunnyStorage, IConfiguration config)
        {
            _config = config;
            _imageLink = _config["BunnyStorage:ImageLink"];
            _unitOfWork = unitOfWork;
            _bunnyStorage = bunnyStorage;
        }

        [HttpGet("GetAllProducts")]
        public async Task<ActionResult<IEnumerable<Product>>> GetAll()
        {

            if (_unitOfWork.Product == null)
            {
                return NotFound();
            }

            var products = await _unitOfWork.Product.GetAll(includeProperties: "Category");

            return Ok(products);
        }

        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<ProductPost>> Add([FromForm] ProductPost product)
        {

            var file = product.MyFile;
            var extension = Path.GetExtension(file.FileName);
            string fileName = Guid.NewGuid().ToString() + extension;
            Stream stream = file.OpenReadStream();

            await _bunnyStorage.Upload(fileName, stream);

            var productDto = new Product
            {
                Title = product.Title,
                Description = product.Description,
                Price = product.Price,
                ImageUrl = _imageLink + fileName,
                CategoryId = product.Category
            };

            _unitOfWork.Product.Add(productDto);
            await _unitOfWork.SaveAsync();
            return Ok(productDto);
        }


        [HttpPut("{id}")]
        [Consumes("multipart/form-data")]
        public async Task<ActionResult<ProductPut>> Update([FromForm] ProductPut productPut, int id)
        {
            var product = await _unitOfWork.Product.GetById(u => u.Id == id);

            if (productPut.MyFile != null)
            {
                await _bunnyStorage.Delete(product.ImageUrl);

                var file = productPut.MyFile;
                var extension = Path.GetExtension(file.FileName);
                string fileName = Guid.NewGuid().ToString() + extension;
                Stream stream = file.OpenReadStream();

                await _bunnyStorage.Upload(fileName, stream);
                product.ImageUrl = _imageLink + fileName;
            }

            await _unitOfWork.SaveAsync();
            return Ok();
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete(int id)
        {
            var product = await _unitOfWork.Product.GetById(u => u.Id == id);

            if (product == null) return NotFound();

            await _bunnyStorage.Delete(product.ImageUrl);

            _unitOfWork.Product.Delete(product);
            await _unitOfWork.SaveAsync();

            return Ok(product);
        }

    }
}
