import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {
  constructor(private router:Router){}
product=[
  { img:'',name:'laptop',id:1,price:1455},
  { img:'',name:'tv',id:2,price:145434},
  { img:'',name:'mobile',id:3,price:23455},
  { img:'',name:'phone',id:4,price:45255}


]

createUser(){
  this.product.push(  { img:'',name:'laptop',id:1,price:1455}  )
  if(this.product.length>7){
    this.router.navigate(['product'])
  }
}
removeUser(){
  this.product.splice(this.product.length-1)
}
deleteUser(ele:any){
this.product.splice(ele,1)
}
}
