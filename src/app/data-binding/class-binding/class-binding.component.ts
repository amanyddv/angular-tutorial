import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {


  myStyle="15px"

  isActive=false;

  allClasses={
    class1:true,
    class2:true,
    class3:false,
  }

  mltStyle={
    'width': '10%',
    'height': '20vw',
    'background-color': 'red',
}
  
}
