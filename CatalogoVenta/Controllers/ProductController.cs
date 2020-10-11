using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Service.Contract;
using Microsoft.AspNetCore.Mvc;

namespace CatalogoVenta.Controllers
{

    [Route("api/")]
    public class ProductController : Controller
    {
        IProductService _productService;
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet("product")]
        public IEnumerable<Product> GetProducts()
        {
            return _productService.GetProducts();
        }


        [HttpGet("category/{id}/products")]
        public IEnumerable<Product> GetProductsByCategoryId(int id)
        {
            return _productService.GetProductsByCategoryId(id);
        }

        [HttpGet("product/{id}")]
        public IEnumerable<Product>GetProduct(int id)
        {
            return _productService.GetProduct(id);
        }
    }
}
