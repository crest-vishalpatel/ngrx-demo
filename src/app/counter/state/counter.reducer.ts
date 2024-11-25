import { createReducer, on } from "@ngrx/store"
import { changeName, customIncrement, decrement, increment, reset } from "./counter.actions"

export interface State {
  count: number;
  personName: string;
}

export const initialState: State = {
  count: 5,
  personName: 'Vishal Patel'
}

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state, count: state.count + 1
    };
  }),
  on(decrement, (state) => {
    return {
      ...state, count: state.count - 1
    }
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: 0
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      count: state.count + action.value
    }
  }),
  on(changeName, (state) => {
    return {
      ...state,
      personName: 'John Doe'
    }
  })
)