import { ACCESS_TOKEN } from './../share/utils/configApp';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { USER_LOGIN } from '../share/utils/configApp';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {

  constructor(private router:Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if(localStorage.getItem(ACCESS_TOKEN)){
        return true;
      }
      alert('Đăng nhập để vào trang này !')
      this.router.navigate(['/login'])
      return false;
  }
  
}
