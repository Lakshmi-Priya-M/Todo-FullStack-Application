import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedauthService : HardCodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService) { }

  ngOnInit() {
    //this.hardcodedauthService.logout();
    this.basicAuthenticationService.logout();
  }

}
