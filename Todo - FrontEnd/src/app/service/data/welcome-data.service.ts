import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message : string)
  {
  }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  // Http service is used to handle get,post,delete request
  constructor(private http: HttpClient) { }
  
  executeHelloWorldBeanService(){
    // the response structure should be of object HelloWorldBean
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
    // console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldServiceWithPathVariable(name){
    // the response structure should be of object HelloWorldBean
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Execute Hello World Bean Service");
  }

  // http://localhost:8080/hello-world/path-variable/lakshmi
}
