using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Service.Contract
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetCategories();
    }
}
