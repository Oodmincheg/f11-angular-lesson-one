import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { Todo } from '../../shared/types';

const emptyTodo = {
  title: '',
};
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass'],
})
export class TodoFormComponent {
  @Input() currentTodo: Todo = { ...emptyTodo };
  @Output() saveTodo = new EventEmitter();
  @Output() resetTodo = new EventEmitter()

  constructor() { } 
  
  saved() {
    this.saveTodo.emit()
  }
  reseted() {
    this.resetTodo.emit()
  }
}
