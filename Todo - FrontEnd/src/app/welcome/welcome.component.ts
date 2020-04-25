import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message : String = "Welcome ";
  name : String = "";
  welcomeMessageFromService: String;

  constructor(private route : ActivatedRoute,
    private service : WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params['name']);
    //getting the username passed from login page
    this.name = this.route.snapshot.params['name'];
  }

  // getWelcomeMessage()
  // {
  //   console.log(this.service.executeHelloWorldBeanService());
  //   this.service.executeHelloWorldBeanService().subscribe(
  //     response => this.handleSuccessfulResponse(response),
  //     error => this.handleErrorResponse(error)
  //   );

  //   //console.log('last line of get welcome message');

  //   //console.log("get welcome message");
  // }

  getWelcomeMessageWithParamater()
  {
    
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    }
  handleSuccessfulResponse(response)
  {
    this.welcomeMessageFromService = response.message;
    //console.log(response);
    //console.log(response.message);
  }

  handleErrorResponse(error)
  {
   // console.log(error);
   // console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
