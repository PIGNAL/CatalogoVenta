using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data
{
    class CatalogoVentaDbContext: DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=JONATHANPC;Database=CatalogoVenta;Trusted_Connection=True;");
            }
        }

        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Colour> Colour { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductColour> ProductColour { get; set; }
        public virtual DbSet<ProductWaist> ProductWaist { get; set; }
        public virtual DbSet<Waist> Waist { get; set; }
    }
}
