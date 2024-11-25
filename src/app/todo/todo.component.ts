import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosPageActions } from '../state/todos/todo.actions';
import { Todo } from './todo.model';
import { selectAllTodos } from '../state/todos/todo.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todo = new FormControl('', Validators.required);
  todos$: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectAllTodos)
  }

  ngOnInit(): void {
    this.store.dispatch(TodosPageActions.loadTodos());
  }

  addTodo(): void {
    if (this.todo.invalid) return;
    this.store.dispatch(TodosPageActions.addTodo({content: this.todo.value || ''}));
    this.todo.reset();
  }

  removeTodo(todo: Todo): void {
    this.store.dispatch(TodosPageActions.removeTodo({id: todo.id}));
  }
}
