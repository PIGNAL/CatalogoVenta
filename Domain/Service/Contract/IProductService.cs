using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Service.Contract
{
    public interface IProductService
    {
        IEnumerable<Product> GetProducts();
        IEnumerable<Product> GetProductsByCategoryId(int idCategory);
    }
}
