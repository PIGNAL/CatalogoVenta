using Domain.Entities;
using Domain.Repositories;
using Domain.Service.Contract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Service
{
    public class ProductService : IProductService
    {
        IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetProducts();
        }
        public IEnumerable<Product> GetProductsByCategoryId(int idCategory)
        {
            return _productRepository.GetProductsByCategoryId(idCategory);
        }
        public IEnumerable<Product> GetProduct(int id)
        {
            return _productRepository.GetProduct(id);
        }
    }
}
