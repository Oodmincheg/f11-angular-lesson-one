import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodosService } from '../shared/todos.service';

export type Todo = {
  title: string;
  id?: number;
  desc?: string;
  highPriority?: boolean;
  deadline?: Date;
};

const emptyTodo = {
  title: '',
};
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass'],
})
export class TodoFormComponent implements OnInit {
  todoList: Todo[] = [];
  currentTodo: Todo = { ...emptyTodo };
  placeholder = 'Enter your todo';

  constructor(private http: HttpClient, private todosService: TodosService) {} // dependency injection

  ngOnInit() {
    this.loadTodos();
  }
  saveTodo() {
    if (!this.currentTodo.title) {
      return;
    }
    if (!this.currentTodo.id) {
      this.todosService.post(this.currentTodo)
        .subscribe(() => this.loadTodos());
    } else {
      this.todosService.put(this.currentTodo)
        .subscribe(() => this.loadTodos());
    }

    this.resetCurrentTodo();
  }

  loadTodos() {
    this.todosService.get().subscribe((todos: any) => (this.todoList = todos));
  }

  deleteTodo(id: number | undefined) {
    if (!id) {
      return
    }
    this.todosService.delete(id)
      .subscribe(() => this.loadTodos());
  }

  resetCurrentTodo() {
    this.currentTodo = { ...emptyTodo };
  }

  setCurrentTodo(todo: Todo) {
    this.currentTodo = { ...todo };
  }
}
// CRUD - create read update delete. post get put delete.
