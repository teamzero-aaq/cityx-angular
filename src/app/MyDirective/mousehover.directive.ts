import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMousehover]',
})
export class MousehoverDirective {
  constructor(private element: ElementRef) {}
  @HostListener('mouseenter') mouseEnter() {
    this.applyHover('#00a8ff', '#f5f6fa');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.applyHover(null,null);
  }

  applyHover(color1,color2 ) {
    this.element.nativeElement.style.color = color1;
    this.element.nativeElement.style.backgroundColor = color2;
    
  }
  }


  // custom attributes Directive