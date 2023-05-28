import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {

  selectiveProduct: any;

  getProductVal(val: any) {
    console.log(val.target.value);
    this.selectiveProduct = val.target.value;
  }
}
