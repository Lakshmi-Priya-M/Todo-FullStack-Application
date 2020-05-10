import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos-component/list-todos-component.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private todoDataService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    // params is similar to a map where id is the key. The value is returned and initialised to id variable.
    this.id = this.route.snapshot.params['id'];

    // description is undefined error occured since the below implementation is an asynchronous method. So initialising the todo 
    // with dummy values. so that we will not get that error
    this.todo = new Todo(this.id, "", false, new Date());

    if (this.id != -1) {
      // Retrieving the todo details from the server using id and subscribing the response.
      this.todoDataService.retrieveTodo('Lakshmi', this.id)
        .subscribe(
          data => this.todo = data
        )
    }
  }

  saveMyTodo() {
    if (this.id == -1) { // when comparing objects === , when comparing primitives ==
      // Create a new todo
      this.todoDataService.createTodo('Lakshmi', this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['listTodos'])
          }
        )
    }
    else {
      this.todoDataService.updateTodo('Lakshmi', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['listTodos'])
          }
        )
    }
  }


}
