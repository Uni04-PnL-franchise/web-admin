import { Component, OnInit } from '@angular/core';
import { IsLoginGuard } from 'src/app/_core/guards/is-login.guard';
import { AuthService } from 'src/app/_core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  email: string = "";
  password: string = "";

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    if(this.email == ""){
      alert('email is empty');
    }
    if(this.password == ''){
      alert("password is empty");
    }

    

    if(IsLoginGuard){
      this.auth.login(this.email, this.password)
    }

  }
}
