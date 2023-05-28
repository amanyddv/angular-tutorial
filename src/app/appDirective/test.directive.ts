import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  // constructor(private ele: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  // }
  @HostBinding ('style.backgroundColor') bgColor:any;
  @HostBinding('class.myClass') className=false;
  @HostListener('click') myClick(){
    this.bgColor='blue';
    this.className=true;
  }
  
  // it applied in about us page

}
