import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  // Http service is used to handle get,post,delete request
  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    // the response structure should be of object HelloWorldBean
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
    // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldServiceWithPathVariable(name) {

    // This code is not used since it's hardcoded
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // This code is not used since it's hardcoded
    let headers = new HttpHeaders(
      {
        Authorization : basicAuthHeaderString
      })

    // The response structure should be of object HelloWorldBean
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`, 
    //{headers}
    );
    // console.log("Execute Hello World Bean Service");
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Lakshmi';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    return basicAuthHeaderString;

  }

  // Access to XMLHttpRequest at 'http://localhost:8080/users/Lakshmi/todos' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.


  // Access to XMLHttpRequest at 'http://localhost:8080/hello-world/path-variable/Lakshmi' 
  // from origin 'http://localhost:4200' has been blocked by CORS policy: 
  // Response to preflight request doesn't pass access control check: It does not have HTTP ok status.



}
