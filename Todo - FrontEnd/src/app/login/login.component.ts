import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Lakshmi';
  password = '';
  invalidLogin = false;
  errorMessage = "Invalid Credentials";
  constructor(private router : Router, private hardcodedauthService: HardCodedAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin()
  {
    if(this.hardcodedauthService.authenticate(this.username, this.password))
    {
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;
    }
    else{
      this.invalidLogin = true;
    }
    
  }
}
