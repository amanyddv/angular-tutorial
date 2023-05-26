import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
isValid=false;
onCreateBlock(){
  this.isValid=!this.isValid;
}
}
