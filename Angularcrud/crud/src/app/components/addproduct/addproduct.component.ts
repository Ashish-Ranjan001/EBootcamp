import { Component } from '@angular/core';
import { ReactiveFormsModule , FormGroup , FormControl , Validators} from '@angular/forms';
import { ProductsService } from '../../product/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  myForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required]),
    price:new FormControl('',[Validators.required]),
    quantity:new FormControl('',[Validators.required])
  })
 constructor(private proSer:ProductsService,private router:Router){}
  postData(){
     let formData=this.myForm.value;
     this.proSer.addProduct(formData)
     .subscribe({
       next:(data:any)=>{
          alert("Product Added");
          this.router.navigateByUrl("/");//redirect to home
       },
       error:(err)=>{
         console.log(err)
       }
     })
  }
}
 