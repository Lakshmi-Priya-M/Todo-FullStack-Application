package com.rest.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//To denote this configuration contains spring configuration
@Configuration
//To denote this configuration file has spring security
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		    .csrf().disable() // disabiling csrf 
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // when url matches option request , we would want to permit allow
					.anyRequest().authenticated()                                 //except for options request, authenticate other request and use httpbasic authentication
					.and()
					//.formLogin().and()
					.httpBasic();
	}

}
