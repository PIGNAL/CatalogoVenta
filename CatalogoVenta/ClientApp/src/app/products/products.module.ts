import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ]
})
export class ProductsModule { }
