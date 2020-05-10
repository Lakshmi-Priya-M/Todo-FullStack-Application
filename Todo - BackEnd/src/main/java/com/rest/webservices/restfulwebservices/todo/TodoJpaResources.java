package com.rest.webservices.restfulwebservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoJpaResources {
	
	@Autowired
	private TodoHardCodeService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	// This method retrieves the list of todos
	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username)
	{
		return todoJpaRepository.findByUsername(username);
		//return todoService.findAll();
	}
	
	// This method retrieves a specific todo details using it's id
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id)
	{
		return todoJpaRepository.findById(id).get();
		//return todoService.findById(id);
	}
	
	// DELETE/users/{user_name}/todos/{id}
	// ResponseEntity represents the whole HTTP response: status code, headers, and body.
	// This method deletes a specific todo using it's id
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id)
	{
		//Todo todo = todoService.deleteById(id);
		todoJpaRepository.deleteById(id);
		
		return ResponseEntity.noContent().build();
		
		//return ResponseEntity.notFound().build();
	}
	
	//	 Edit/update a todo
	//	 PUT/ users/{user_name}/todos/{todo_id}
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo)
	{
		//Todo updatedTodo = todoService.save(todo);
		Todo updatedTodo = todoJpaRepository.save(todo);
		
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}
	
	//	 Create a new Todo
	//	 POST/users/{user_name}/todos/
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo)
	{
		//Todo createdTodo = todoService.save(todo);
		
		todo.setUsername(username);
		
		Todo createdTodo = todoJpaRepository.save(todo);
		// Location
		// Get current resource url
		// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
									.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
		
	}
	
}
