import { Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

export const routes: Routes = [
    
    {
        path:" ",component:HomeComponent
    },
    {
        path:"addproduct",component:AddproductComponent
    },
    {path:'editpro/:id',component:EditproductComponent},
];
