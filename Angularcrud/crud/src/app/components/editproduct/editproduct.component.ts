import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../../product/products.service';

@Component({
  selector: 'app-editproduct',
  imports: [ReactiveFormsModule],
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit {
  id:any;
  myForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
  })
  constructor(private aroute:ActivatedRoute,private proser:ProductsService,private router:Router){}
  ngOnInit(): void {
    this.id=this.aroute.snapshot.paramMap.get('id');//get params
    this.proser.getProductById(this.id)
    .subscribe({
        next:(data:any)=>{
          this.myForm.patchValue(data);
        },
        error:(err: any)=>{
           console.log(err)
        }
    })
  }
  
  postData(){
    let formData=this.myForm.value;
    this.proser.editProduct(this.id,formData)
    .subscribe({
       next:(data:any)=>{
          Swal.fire("Product Updated!");
          this.router.navigateByUrl("/");
       },
       error:(err: any)=>{
         console.log(err)
       }
    })
}
}
