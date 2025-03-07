import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  $subject:any;
 
  private API_URL="http://localhost:3000/products";
  constructor(private http:HttpClient) {
    let data=localStorage.getItem('mycart');
    this.$subject=new BehaviorSubject(data!=undefined?JSON.parse(data):[]);
   }
 
  getAllProducts():Observable<any>{
      return this.http.get(this.API_URL)
  }
  addProduct(data:Product):Observable<any>{
    return this.http.post(this.API_URL,data);
  }
  deleteProduct(id:any){
     return this.http.delete(`${this.API_URL}/${id}`);
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }
  editProduct(id:any,data:Product):Observable<any>{
    return this.http.put(`${this.API_URL}/${id}`,data);
  }
  addCartSubject(data:any){
    this.$subject.next(data);
  }
}