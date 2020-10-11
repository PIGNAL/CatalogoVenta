using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Entities
{
    public class ProductColour
    {
        public int ProductColourId { get; set; }
        public int ProductId { get; set; }
        public int ColourId { get; set; }
    }
}
