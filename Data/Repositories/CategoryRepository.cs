using Domain.Entities;
using Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Data.Repositories
{
    public class CategoryRepository:ICategoryRepository
    {
        CatalogoVentaDbContext db = new CatalogoVentaDbContext();
        IEnumerable<Category> ICategoryRepository.GetCategories()
        {
            return db.Category.ToList();
        }
    }
}
