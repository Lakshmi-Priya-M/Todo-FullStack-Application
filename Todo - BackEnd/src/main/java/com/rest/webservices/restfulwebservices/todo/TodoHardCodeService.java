package com.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodeService {

	private static List<Todo> todos = new ArrayList<>();
	private static long idCounter = 0;
	static
	{
		todos.add(new Todo(++idCounter, "in28minutes", "LearnToDance", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "in28minutes", "Learn Hibernate", new Date(), false));
	}
	
	public List<Todo> findAll()
	{
		return todos;
	}
 }
