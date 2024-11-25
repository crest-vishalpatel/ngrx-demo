import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../todo/todo.service";
import { Store } from "@ngrx/store";
import { catchError, EMPTY, map, Observable, of, switchMap, withLatestFrom } from "rxjs";
import { Todo } from "../../todo/todo.model";
import { TodoAPIActions, TodosPageActions } from "./todo.actions";
import { selectAllTodos } from "./todo.selectors";

@Injectable()
export class TodoEffects {
  actions$ = inject(Actions);
  store = inject(Store);
  constructor(
    private todoService: TodoService
  ) {}

  loadTodos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodosPageActions.loadTodos),
      switchMap(() => 
        this.todoService.getTodos().pipe(
          map((todos) => TodoAPIActions.todoLoadSuccess({todos})),
          catchError((error) => of(TodoAPIActions.todoLoadFailure({error})))
        ))
    ))
  
  saveTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosPageActions.addTodo, TodosPageActions.removeTodo),
      withLatestFrom(this.store.select(selectAllTodos)),
      switchMap(([action, todos]) => this.todoService.saveTodo(todos))
    ))
}