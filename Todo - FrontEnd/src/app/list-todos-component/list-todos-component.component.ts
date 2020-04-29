import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos-component',
  templateUrl: './list-todos-component.component.html',
  styleUrls: ['./list-todos-component.component.css']
})
export class ListTodosComponentComponent implements OnInit {

  todos : Todo[]
  message : String;

  // todos = [
  //   new Todo(1, "To finish Angular Course", new Date(), false),
  //   new Todo(2, "To Learn Hibernate Course", new Date(), false),
  //   new Todo(3, "To Learn Spring Course", new Date(), false),
  // ]
  // todo = {
  //   id: 1,
  //   description : 'To finish Angular Course'
  // };

  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  // reusing the same method in delete todo method. Once the todo is deleted, again the list should be retrieved.
  // Before re-using , the todo is not delete in the list until it is refreshed.
  refreshTodos(){
    // retrieving the list of todos from the server with the hardcoded username and subscribing
    // the response
    this.todoService.retrieveAllTodos('Lakshmi').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id)
  {
    console.log(`delete method works ${id}`);
    this.todoService.deleteTodo('Lakshmi',id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id)
  {
    console.log(`update method works ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }

}
