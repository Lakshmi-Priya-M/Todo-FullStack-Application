import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }

  // request - the http request which is sent out
  // This method intercepts the request and username, password is sent as an authorization 
  // header and returned to the httphandler

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'Lakshmi';
    // let password = 'dummy';
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);


    //let username = this.basicAuthenticationService.getAuthenticatedUser();
    // let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      // the request cannot be modified, so it can be cloned and override a specific property
      request = request.clone(
        {
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        })
    }
    return next.handle(request);

  }
}
