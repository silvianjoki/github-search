import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVistedrepo]'
})
export class VistedrepoDirective {

  constructor(private elem: ElementRef) {} 

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue)');
    this.changeColor('white');
  
  }
    changeColor(color: string) {
      this.elem.nativeElement.style.color = color;
    }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.changeColor('');
  
  }
  
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  
  }

}
