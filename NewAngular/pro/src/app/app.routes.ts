
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { UsersComponent } from './components/users/users.component';
import { FromsComponent } from './components/froms/froms.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'posts',component:PostComponent},
    {path:'users',component:UsersComponent},
    {path:'forms',component:FromsComponent}

];
