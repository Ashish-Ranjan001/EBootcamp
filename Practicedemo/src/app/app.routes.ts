import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { FooterComponent } from '../components/footer/footer.component';

export const routes: Routes = [
    {
        path:" ",component:HomeComponent
    },
    {
        path:"course",component:GalleryComponent
    },
    {
        path:"about_us",component:FooterComponent
    }
];
