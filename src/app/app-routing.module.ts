import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  { path: '', loadChildren:()=>LoginModule},
  { path: 'login', loadChildren:()=>LoginModule},
  { path: 'home', loadChildren:()=>HomeModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
