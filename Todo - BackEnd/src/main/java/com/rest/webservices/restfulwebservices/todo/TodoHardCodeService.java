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
		todos.add(new Todo(++idCounter, "Lakshmi", "LearnToDance", new Date(), false));
		todos.add(new Todo(++idCounter, "Lakshmi", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "Lakshmi", "Learn Hibernate", new Date(), false));
	}
	
	public List<Todo> findAll()
	{
		return todos;
	}
	
	// Save method to save the updated todo details
	public Todo save(Todo todo)
	{
		// When adding a new todo, incrementing the id counter.
		if(todo.getId() == null  || todo.getId() == -1 || todo.getId() == 0 )
		{
			todo.setId(++idCounter);
			todos.add(todo);
		}
		// When updating the todo
		else
		{
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	// Delete method to delete a todo
	public Todo deleteById(long id)
	{
		// Finding the todo by using id
		Todo todo = findById(id);
		if(todo == null)
		{
			return null;
		}
		
		// Removing the todo from the todos list 
		if(todos.remove(todo))
		{
			return todo;
		}
		
		return null;
	}

	public Todo findById(long id) {
		for(Todo todo : todos)
		{
			if(todo.getId() == id)
			{
				return todo;
			}
		}	
		return null;
	}
 }
