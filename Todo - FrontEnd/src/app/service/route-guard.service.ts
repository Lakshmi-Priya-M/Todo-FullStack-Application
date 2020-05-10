import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedauthService: HardCodedAuthenticationService, private router : Router,
    private basicAuthenticationService : BasicAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //if (this.hardcodedauthService.isUserLoggedIn())
    if(this.basicAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);  

    return false;
  }
}
