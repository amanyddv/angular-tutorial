import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
msg="vuv"
handleClick() {
  // Function body
  this.msg="product is added";
  console.log('Button clicked!');
}
handleEvent(event:any){
console.log(event);
console.log(event.target.value)
}

getinfo(inputInfo:any){
  console.log(inputInfo)
  console.log(inputInfo.value)

}
}
