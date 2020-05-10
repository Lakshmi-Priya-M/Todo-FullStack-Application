package com.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// This allows the service to accept 4200 local host
@CrossOrigin(origins = "http://localhost:4200")

// Adding rest controller because Rest services which accepts request
@RestController
public class BasicAuthenticationController {

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorldBean()
	{
		// throw new RuntimeException("Some Error has happened! .... Please contact admin support");
		return new AuthenticationBean("You are authenticated");
	}
	
}


