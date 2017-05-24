import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false //tiene que estar pendiente del ciclo de cambios para que no de error si eliminamos un elemento del array
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];

    for (let key in value) {
      keys.push(key);
    }

    return keys;
  }

}
