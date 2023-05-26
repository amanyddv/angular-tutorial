import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  name = "anoop";

  disabled=false;
  hidden=false;

  appStatus=false;
  online="status1";
  offline="status2";
}
