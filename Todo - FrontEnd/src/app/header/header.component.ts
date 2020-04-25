import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isUserLoggedIn : boolean = false;

  constructor(private hardcodedauthService : HardCodedAuthenticationService) { }

  ngOnInit() {
   // this.isUserLoggedIn = this.hardcodedauthService.isUserLoggedIn();
  }

}
