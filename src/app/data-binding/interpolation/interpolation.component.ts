import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
name:String="anoop";
a=5;
b=6;
myMethod(){
  return "MY name is "+this.name;
}
appStatus:boolean=!false;
}
