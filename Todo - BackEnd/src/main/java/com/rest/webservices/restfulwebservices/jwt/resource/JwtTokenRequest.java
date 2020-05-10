package com.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    
//	{
//    	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMYWtzaG1pIiwiZXhwIjoxNTg5MTMwMDc1LCJpYXQiOjE1ODg1MjUyNzV9.Y98yyaqJrVsJq5m54SgTWJlWrNsXQ6bFBp0PucuViPbTM6ni4Fl5-KZkh58QoEzxIJHJvPOFo3fjCUONfjOrsw"
//	}

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

