import { Component, OnInit } from '@angular/core';

type Todo = {
  title: string;
  id?: Symbol;
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
  

export class TodoFormComponent {
  todoList: Todo[] = [];
  currentTodo: Todo = {...emptyTodo};
  placeholder = 'Enter your todo';

  saveTodo() {
    if (!this.currentTodo.title) {
      return
    }
    if (!this.currentTodo.id) {
      this.todoList.push({ ...this.currentTodo, id: Symbol() })
    } else {
      let todoToChange: any = this.todoList.find(todo => todoToChange.id === todo.id)
      todoToChange = {...this.currentTodo}
    }
    
    this.resetCurrentTodo();
  }

  deleteTodo(id: Symbol | undefined) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id)
  }
  
  resetCurrentTodo() {
    this.currentTodo = {...emptyTodo}
  }

  setCurrentTodo(todo: Todo) {
    this.currentTodo = {...todo}
  }
  
}
