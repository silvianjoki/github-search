import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVistedrepo]'
})
export class VistedrepoDirective {

  constructor(private elem: ElementRef) {} 

  
  @HostListener('click') onClicks(){
    this.text('black')
  }
  private text(action:string){
    this.elem.nativeElement.style.color=action
  
  }

}
