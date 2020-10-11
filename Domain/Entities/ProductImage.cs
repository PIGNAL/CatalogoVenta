using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class ProductImage
    {
        public int ProductImageId { get; set; }
        public int ProductId { get; set; }
        public string Image { get; set; }
    }
}
