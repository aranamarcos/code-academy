import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLetra20]'
})
export class Letra20Directive implements OnInit{


  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
    this.renderer.setStyle(this.elemento.nativeElement, 'color', 'red');
  }

}
