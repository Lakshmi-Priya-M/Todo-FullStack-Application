import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public target_date: Date,
    public done: boolean
  ) {

  }
}
@Component({
  selector: 'app-list-todos-component',
  templateUrl: './list-todos-component.component.html',
  styleUrls: ['./list-todos-component.component.css']
})
export class ListTodosComponentComponent implements OnInit {


  todos = [
    new Todo(1, "To finish Angular Course", new Date(), false),
    new Todo(2, "To Learn Hibernate Course", new Date(), false),
    new Todo(3, "To Learn Spring Course", new Date(), false),
  ]
  // todo = {
  //   id: 1,
  //   description : 'To finish Angular Course'
  // };

  constructor() { }

  ngOnInit() {
  }

}
