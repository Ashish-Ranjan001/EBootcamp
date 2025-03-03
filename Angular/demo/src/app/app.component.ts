import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,AboutComponent,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}

