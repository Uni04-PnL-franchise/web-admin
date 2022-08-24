import { IsLoginGuard } from './../_core/guards/is-login.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { Routes } from '@angular/router';
import { AntdModule } from '../_core/share/antd/antd.module';
import { IconsProviderModule } from '../_core/share/antd/icons-provider.module';
import { UserComponent } from './user/user.component';
import { BrandComponent } from './brand/brand.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { CreateBrandComponent } from './brand/create-brand/create-brand.component';
import { ReactiveFormsModule } from '@angular/forms';

const homeRoute: Routes = [
  {
    path: '', component: HomeTemplateComponent, 
    canActivate: [IsLoginGuard],
    children: [
      {path:'', component:UserComponent},
      {path:'user', component:UserComponent},
      {path:'create-user', component:CreateUserComponent},
      {path:'brand', component:BrandComponent},
      {path: 'create-brand', component: CreateBrandComponent}
    ]
  }
]

@NgModule({
  declarations: [
    HomeTemplateComponent,
    UserComponent,
    BrandComponent,
    CreateUserComponent,
    CreateBrandComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    AntdModule,
    IconsProviderModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
