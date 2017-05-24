import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor = "orange";
  }
  @Input("appResaltado") nuevoColor:string; //Esta variable viene de la vista

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseSale(){
    this.resaltar(null);
  }

  private resaltar (color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
