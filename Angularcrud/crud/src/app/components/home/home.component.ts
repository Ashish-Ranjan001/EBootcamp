import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../../product/products.service';
import { Product } from '../../product/product';
import Swal from 'sweetalert2'
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  productData:Product[]=[];
  constructor(private proser:ProductsService){}
  ngOnInit(): void {
     this.proser.getAllProducts()
     .subscribe({
        next:(data:any)=>{
           console.log(data);
           this.productData=data;
        },
        error:(err)=>{
          console.log(err)
        }
     })
  }
  delPro(id:any){
  //  if(confirm("Do u want to delete?")){
  //     this.proser.deleteProduct(id)
  //     .subscribe({
  //        next:(data:any)=>{
  //          this.productData=this.productData.filter((pro:any)=> pro.id!=id);
  //          Swal.fire("Product Deleted!");
  //        },
  //        error:(err)=>{
  //          console.log(err)
  //        }
  //     })
  //  }
  Swal.fire({
    title: "Do you want to delete?",
    showDenyButton: true,
    // showCancelButton: true,
    confirmButtonText: "Ok",
    denyButtonText: `Cancel`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
           this.proser.deleteProduct(id)
      .subscribe({
         next:(data:any)=>{
           this.productData=this.productData.filter((pro:any)=> pro.id!=id);
           Swal.fire("Product Deleted!");
         },
         error:(err)=>{
           console.log(err)
         }
      })
    }
    // else if (result.isDenied) {
    //   Swal.fire("Changes are not saved", "", "info");
    // }
  });
  }
  addCart(id:any){
     if(localStorage.getItem("mycart")!=undefined){
        let data:any=localStorage.getItem("mycart");
        let arr=JSON.parse(data);
        if(arr.includes(id)){
           Swal.fire("Already in a cart!");
        }
        else{
          arr.push(id);
          localStorage.setItem("mycart",JSON.stringify(arr));
          this.proser.addCartSubject(arr);
          Swal.fire("Add Cart Successfully!");
          //window.location.reload();
        }
     }
     else{
        let arr=[];
        arr.push(id);
        localStorage.setItem("mycart",JSON.stringify(arr));
        this.proser.addCartSubject(arr);
        Swal.fire("Add Cart Successfully!");
        //window.location.reload();
     }
  }
}
 
 