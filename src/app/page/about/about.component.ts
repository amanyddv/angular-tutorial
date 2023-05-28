import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
  constructor(){
    console.log("constructor called")
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called(when change in input property)  only life cycle hook who called with argument ')
  }
  ngOnInit(){
    console.log('ngOnInit called')
  }
  ngDoCheck(): void {
    console.log("ngDoCheck (rerender part of component and every click)")
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit (when ng-content render)')
  }
  ngAfterContentChecked(): void {
    console.log('when content change')
  }
  ngAfterViewInit(): void {
    console.log('when content fully initilized')
  }
  ngAfterViewChecked(): void {
    console.log('every thing initilized')
  }
  ngOnDestroy(): void {
    console.log('destroy')
  }
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
