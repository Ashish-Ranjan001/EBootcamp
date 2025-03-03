
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-nav',
  imports: [RouterLink,HomeComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
 
}