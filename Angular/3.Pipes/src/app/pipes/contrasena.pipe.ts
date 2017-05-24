import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean): string {
    let password = value.split("");
    if(mostrar){
      for (let i in password) {
        password[i] = '*';
      }
    }
    return password.join("");
  }

}
