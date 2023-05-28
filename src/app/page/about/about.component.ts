import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  addedProduct:any;
proselected=false;
selProduct:any
onSelect(productname:any){
  this.proselected=true;
  this.selProduct=productname;
}

onAddedProduct(prodata:any){
  this.addedProduct=prodata;
}
}
