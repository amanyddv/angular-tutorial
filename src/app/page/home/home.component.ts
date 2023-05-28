import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { ChildComponent } from 'src/app/component/child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 constructor(private renderer:Renderer2){

 }
  statusOnline=true
products=[
  {name:'laptop'},
  {name:'TV'},
  {name:'Phone'},
  {name:'Washing Machine'},
]

username="aman"


@ViewChild('box') box !:ElementRef;
ngAfterViewInit() {
  // console.log(this.box);
  // this.box.nativeElement.style.backgroundColor="blue"
  // this.box.nativeElement.classList="boxblue"
  // this.box.nativeElement.innerHTML="modified html"

  console.log(this.child)
  this.renderer.setStyle(this.box.nativeElement,'backgroundColor','red')
  this.renderer.setStyle(this.box.nativeElement,'color','white')
  this.renderer.addClass(this.box.nativeElement,'myclass')
  this.renderer.setAttribute(this.box.nativeElement,'title','this is title')
  


}
@ViewChild( ChildComponent) child!:ChildComponent ;

change(){
this.child.productselected=true
}

@HostListener('click') myClick(){
    alert('clicked')
}
@HostListener('window:scroll',['$event']) myScroll(){
  console.log('scrolling')
}
// window work on whole application that why use HostListener
}
