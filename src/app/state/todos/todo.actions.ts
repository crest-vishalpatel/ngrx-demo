import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../../todo/todo.model";

export const TodosPageActions = createActionGroup({
  source: 'Todo Page',
  events: {
    'Load Todos': emptyProps(),
    'Add Todo': props<{ content: string }>(),
    'Remove Todo': props<{ id: string }>()
  }
});

export const TodoAPIActions = createActionGroup({
  source: 'Todo API',
  events: {
    'Todo Load Success': props<{ todos: Todo[]}>(),
    'Todo Load Failure': props<{ error: string }>()
  }
})