import { Route, Router, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private Router: Router) { }


  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.Router.navigate(['home'])
    }, err => {
      alert(err.message);
      this.Router.navigate(['']);
    }
    )
  }


  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.Router.navigate(['']);
    }, err => {
      alert(err.message);
    })
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.fireauth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.Router.navigate(['home'])
      })
      .catch((error) => {
        console.log(error);
        this.Router.navigate(['']);
      });
  }

}
