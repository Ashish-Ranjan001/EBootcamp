import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallery', component: GallaryComponent }
    
];