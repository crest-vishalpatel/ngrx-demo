import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(): Observable<any> {
    const todos = localStorage.getItem('todos');
    if (todos) {
      console.log(todos);
      return of(JSON.parse(todos));
    }
    return EMPTY;
  }

  saveTodo(todos: Todo[]): Observable<any> {
    localStorage.setItem('todos', JSON.stringify(todos));
    return EMPTY;
  }
}
