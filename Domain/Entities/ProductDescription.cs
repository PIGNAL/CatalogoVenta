using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class ProductDescription
    {
        public int DescriptionId { get; set; }
        public string Description { get; set; }
        public int ProductId { get; set; }
    }
}
