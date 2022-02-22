import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVistedrepo]'
})
export class VistedrepoDirective {

  constructor(private elem: ElementRef) {

    this.elem.nativeElement.style.backgroundColor = 'black';
  
  }

}
