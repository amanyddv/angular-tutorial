import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  @ViewChild('myForm') myForm!:NgForm;

  genders=[
    {id:1,value:'male'},
    {id:2,value:'female'}
  ]
  defalutGender="female"

  onSubmit(form:NgForm){
    console.log(form.value)
  }
  Submit(){
    console.log(this.myForm.value)
    
  }
}
