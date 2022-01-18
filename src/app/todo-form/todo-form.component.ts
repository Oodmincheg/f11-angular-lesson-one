import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Todo = {
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTodos();
  }
  saveTodo() {
    if (!this.currentTodo.title) {
      return;
    }
    if (!this.currentTodo.id) {
      this.http
        .post('http://localhost:3000/todos', this.currentTodo)
        .subscribe(() => this.loadTodos());
    } else {
      this.http
        .put(
          `http://localhost:3000/todos/${this.currentTodo.id}`,
          this.currentTodo,
        )
        .subscribe(() => this.loadTodos);
    }

    this.resetCurrentTodo();
  }

  loadTodos() {
    this.http
      .get('http://localhost:3000/todos')
      .subscribe((todos: any) => (this.todoList = todos));
  }

  deleteTodo(id: number | undefined) {
    this.http
      .delete(`http://localhost:3000/todos/${id}`)
      .subscribe(() => this.loadTodos());
  }

  resetCurrentTodo() {
    this.currentTodo = { ...emptyTodo };
  }

  setCurrentTodo(todo: Todo) {
    this.currentTodo = { ...todo };
  }
}
