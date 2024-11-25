import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../todo/todo.model";
import { TodoAPIActions, TodosPageActions } from "./todo.actions";

export interface TodoState {
  todos: Todo[],
  error: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  status: 'pending'
}

export const todoReducer = createReducer(
  initialState,
  on(TodosPageActions.addTodo, (state, {content}) => ({
    ...state,
    todos: [...state.todos, { id: Date.now().toString(), content}]
  })),
  on(TodosPageActions.removeTodo, (state, {id}) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id)
  })),
  on(TodosPageActions.loadTodos, (state) => ({
    ...state, 
    status: 'loading'
  })),
  on(TodoAPIActions.todoLoadSuccess, (state, {todos}) => ({
    ...state,
    todos,
    error: '',
    status: 'success'
  })),
  on(TodoAPIActions.todoLoadFailure, (state, {error}) => ({
    ...state,
    error: error,
    status: 'error'
  }))
)