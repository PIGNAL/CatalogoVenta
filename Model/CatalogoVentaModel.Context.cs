﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class CatalogoVentaEntities : DbContext
    {
        public CatalogoVentaEntities()
            : base("name=CatalogoVentaEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Colour> Colour { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductColour> ProductColour { get; set; }
        public virtual DbSet<ProductDescription> ProductDescription { get; set; }
        public virtual DbSet<ProductWaist> ProductWaist { get; set; }
        public virtual DbSet<Waist> Waist { get; set; }
    }
}