import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'picture'
})
export class PicturePipe implements PipeTransform {

  transform(picture: string): string {
    if (picture) {
      return  picture;
    } else {
      return './assets/img/no-image.jpg';
    }

 }
}
