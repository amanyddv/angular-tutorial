import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
value="my name is aman"
date=new Date()
nameArr=[
  'rahij',
  'aman',
  'rahij',
  'aman',
  'rahij',
  'aman',
  'rahij',
  'aman',
]
productArr=[
  {sno:1,name:'laptop',price:"70000"},
  {sno:2,name:'telivision',price:"1000"},
  {sno:3,name:'phone',price:"20000"},
  {sno:4,name:'laptop',price:"3000"},
  {sno:5,name:'laptop',price:"70000"},
  {sno:6,name:'telivision',price:"1000"},
  {sno:7,name:'phone',price:"20000"},
  {sno:8,name:'laptop',price:"3000"},
 ]
 nameSearch:any;
}
