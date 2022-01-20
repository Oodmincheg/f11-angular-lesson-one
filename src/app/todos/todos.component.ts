import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';
import { Todo } from '../shared/types';

const emptyTodo = {
  title: '',
};
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass'],
})
export class TodosComponent implements OnInit {
  todoList: Todo[] = [];
  currentTodo: Todo = { ...emptyTodo };

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todosService
      .get()
      .subscribe((todos: Todo[]) => (this.todoList = todos));
  }

  saveTodo() {
    if (!this.currentTodo.title) {
      return;
    }
    if (!this.currentTodo.id) {
      this.todosService.post(this.currentTodo).subscribe(() => {this.loadTodos()});
    } else {
      this.todosService.put(this.currentTodo).subscribe(() => {this.loadTodos()});
    }

    this.resetCurrentTodo();
  }

  resetCurrentTodo() {
    this.currentTodo = { ...emptyTodo };
  }
  setCurrentTodo(todo: Todo) {
    this.currentTodo = { ...todo };
  }

  deleteTodo(id: number | undefined) {
    if (!id) {
      return;
    }
    this.todosService.delete(id).subscribe(() => {
      this.loadTodos();
    });
  }
}
