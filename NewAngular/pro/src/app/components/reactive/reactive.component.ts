import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import ageRangeValidator from '../../custom/ageValidator';

@Component({
  selector: 'app-reactive',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  myform:FormGroup=new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]{5,16}')]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    age:new FormControl('',[Validators.required,ageRangeValidator]),
    
  })
 get dd(){
   return this.myform.controls;
 }
 postData(){
    let formData=this.myform.value;
    console.log(formData)
 }
}
