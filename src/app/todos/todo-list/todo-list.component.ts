import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../shared/types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent  {
  @Input() todoList: Todo[] = [];
  @Output() setCurrentTodo = new EventEmitter<Todo>();
  @Output() deleteTodo = new EventEmitter<number>();
  constructor() {}

   
  selectTodo(todo: Todo) {
    this.setCurrentTodo.emit(todo)
  }

  deleted(id: number | undefined) {
    this.deleteTodo.emit(id)
  }
  
}
