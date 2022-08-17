import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTemplateComponent } from './home-template/home-template.component';
import { Routes } from '@angular/router';
import { AntdModule } from '../_core/share/antd/antd.module';
import { IconsProviderModule } from '../_core/share/antd/icons-provider.module';
import { UserComponent } from './user/user.component';
import { BrandComponent } from './brand/brand.component';

const homeRoute: Routes = [
  {
    path: '', component: HomeTemplateComponent, children: [
      {path:'', component:UserComponent},
      {path:'user', component:UserComponent},
      {path:'brand', component:BrandComponent}
    ]
  }
]

@NgModule({
  declarations: [
    HomeTemplateComponent,
    UserComponent,
    BrandComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    AntdModule,
    IconsProviderModule
  ]
})
export class HomeModule { }
