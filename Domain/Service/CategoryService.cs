using Domain.Entities;
using Domain.Repositories;
using Domain.Service.Contract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Service
{
    public class CategoryService : ICategoryService
    {
        ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public IEnumerable<Category> GetCategories()
        {
            return _categoryRepository.GetCategories();
        }
    }
}
