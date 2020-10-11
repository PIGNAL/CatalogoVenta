using Domain.Entities;
using Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public class ProductRepository : IProductRepository
    {
        CatalogoVentaDbContext db = new CatalogoVentaDbContext();
        IEnumerable<Product> IProductRepository.GetProducts()
        {
            return db.Product.ToList();
        }

        IEnumerable<Product> IProductRepository.GetProductsByCategoryId(int idCategory)
        {
            return db.Product.Where(x => x.CategoryId == idCategory).ToList();
        }
    }
}
