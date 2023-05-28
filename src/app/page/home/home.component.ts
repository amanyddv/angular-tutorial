import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  statusOnline=true
products=[
  {name:'laptop'},
  {name:'TV'},
  {name:'Phone'},
  {name:'Washing Machine'},
]
}
