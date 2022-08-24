import { LoginComponent } from './login/login/login.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', loadChildren:()=>LoginModule},
  { path: 'login', loadChildren:()=>LoginModule},
  { path: 'home', loadChildren:()=>HomeModule},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
