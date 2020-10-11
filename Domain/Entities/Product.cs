using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class Product
    {
        public int ProductId { get; set; }
        public decimal Price { get; set; }
        public int Discount { get; set; }
        public string Name { get; set; }
        public string Barcode { get; set; }
        public string? Image { get; set; }
        public int CategoryId { get; set; }
    }
}
