import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicturePipe } from './picture.pipe';



@NgModule({
  declarations: [
    PicturePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PicturePipe
  ]
})
export class PipesModule { }
