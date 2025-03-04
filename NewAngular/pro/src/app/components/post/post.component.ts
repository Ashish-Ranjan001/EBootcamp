import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  postData:any;
  constructor(private http:HttpClient){}
  fetchPosts(){
    const URL="https://jsonplaceholder.typicode.com/posts";
    this.http.get(URL)
    .subscribe({
       next:(data:any)=>{
          console.log(data);
          this.postData=data;
       },
       error:(err)=>{
         console.log(err)
       }
    })
  }
}