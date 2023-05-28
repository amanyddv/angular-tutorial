import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() addedProduct:any =new EventEmitter<any>();
  @Input() productselected=false;
  @Input() selectedProduct:any
  addCart(){
    this.addedProduct.emit(this.selectedProduct);
  }
  @ContentChild('childcon') childpara!:ElementRef;
  ngAfterViewInit(){
    console.log(this.childpara)
  }
}
