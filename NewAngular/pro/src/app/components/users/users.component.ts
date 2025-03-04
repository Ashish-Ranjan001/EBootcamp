import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
 
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
 userData:any;
 constructor(private http:HttpClient){}
 ngOnInit(): void {
    const URL="https://jsonplaceholder.typicode.com/users";
    this.http.get(URL)
    .subscribe({
       next:(data:any)=>{
         console.log(data);
         this.userData=data;
       },
       error:(err)=>{
        console.log(err);
       }
    })
 }
}
 
 