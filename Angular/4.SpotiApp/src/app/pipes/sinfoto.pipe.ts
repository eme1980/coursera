import { Pipe, PipeTransform } from '@angular/core';
let defaultimg:string = "assets/img/noimage.png";
@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {
  transform(value: any[]): string {
    if(!value) {
      return defaultimg;
    }
    return (value.length > 0)? value[1].url : defaultimg
  }

}
