import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export const selectTodos = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodos,
  (state) => state.todos
)