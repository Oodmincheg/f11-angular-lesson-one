import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo-form/todo-form.component';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  get() {
    return this.http.get('http://localhost:3000/todos');
  }

  post(todo: Todo) {
    return this.http.post('http://localhost:3000/todos', todo);
  }

  put(todo: Todo) {
    return this.http.put(`http://localhost:3000/todos/${todo.id}`, todo);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:3000/todos/${id}`); 
  }
  constructor(private http: HttpClient) {}
}
