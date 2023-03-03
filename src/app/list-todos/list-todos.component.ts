import { Component } from '@angular/core';

export class Todo{
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate : Date
    ){

    }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(2, 'Learn to dance', false, new Date()),
    new Todo(3, 'Learn to dance', false, new Date()),
    // {id : 1, description : 'Learn to dance'},
    // {id : 2, description : 'Learn to sing'},
    // {id : 3, description : 'Learn to play'}
  ]
  
  // todo ={
  //   id:1,
  //   description: 'Learn to dance'
  // }

}
