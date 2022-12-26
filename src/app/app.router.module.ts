import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductsComponent } from './dashboard/products/products.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent},
    {path:'dashboard', loadChildren:()=>import('./dashboard/dashboard.module').then(d=>d.DashboardModule)}
]

@NgModule({
imports:[RouterModule.forRoot(routes), DashboardModule],
exports:[RouterModule]
})


export class AppRoutingModule{}