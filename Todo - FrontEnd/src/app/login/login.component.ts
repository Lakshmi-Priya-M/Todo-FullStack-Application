import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName = 'Lakshmi';
  password = '';
  invalidLogin = false;
  errorMessage = "Invalid Credentials";
  constructor(private router : Router) { }

  ngOnInit() {
  }
  handleLogin()
  {
    if(this.UserName === "Lakshmi" && this.password === 'dummy')
    {
      this.router.navigate(['welcome',this.UserName]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
    
  }
}
