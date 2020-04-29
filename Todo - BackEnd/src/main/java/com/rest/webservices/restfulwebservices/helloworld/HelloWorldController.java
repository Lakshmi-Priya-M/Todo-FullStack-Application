package com.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// This allows the service to accept 4200 local host
@CrossOrigin(origins = "http://localhost:4200")

// Adding rest controller because Rest services which accepts request
@RestController
public class HelloWorldController {

	// Creating a method to print hello world
	// @RequestMapping(method = RequestMethod.GET, path = "/helloworld")
	@GetMapping(path = "/hello-world")
	public String helloWorld()
	{
		return "HelloWorld";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean()
	{
		// throw new RuntimeException("Some Error has happened! .... Please contact admin support");
		return new HelloWorldBean("HelloWorld");
	}
	
	// Create a path variable and use it in controller method
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name)
	{
		return new HelloWorldBean(String.format("Hello-World, %s",name));
		return new HelloWorldBean(String.format("Hello World, %s",name));
	}
	
}


