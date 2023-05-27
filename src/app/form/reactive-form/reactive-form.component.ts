import { Component, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  myReactiveForm!: FormGroup;
  notAllowedNames = ['aman', 'rahul']
  genders = [
    { id: 1, value: 'male' },
    { id: 2, value: 'female' }
  ]
  defalutGender = "female"

  addSkill(): void {
    const controls = new FormControl(null, Validators.required)
    this.skillsFormArray.push(controls);
  }

  get skillsFormArray(): FormArray {
    return this.myReactiveForm.get('skills') as FormArray;
  }

  removeSkill(index: number): void {
    this.skillsFormArray.removeAt(index);
  }
  onSubmit() {
    console.log(this.myReactiveForm)
  }
  NaNames(controls: FormControl) {
    if (this.notAllowedNames.indexOf(controls.value) != -1) {
      return { 'nameIsNotAllowed': true }
    }
    return null;

  }
  
  ngOnInit() {
    this.myReactiveForm = new FormGroup({

      'userdetail': new FormGroup({
        'name': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),

      }),
      'email': new FormControl(null, [Validators.required, Validators.email],this.NaEmails()),
      'skills': new FormArray([
        new FormControl(null, Validators.required),

      ])
    });
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value)=>console.log(value)
    // )

    this.myReactiveForm.statusChanges.subscribe(
      (status)=>console.log(status)
    )

    setTimeout(()=>{
      this.myReactiveForm.patchValue({
        'email':'chirag@gmail.com'
      },)
    },4000);

  }

  NaEmails(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<any> | Promise<any> => {
      return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'aman@gmail.com') {
            resolve({ 'emailIsNotAllowed': true });
          } else {
            resolve(null);
          }
        }, 1500);
      });
    };
  }
  
}
