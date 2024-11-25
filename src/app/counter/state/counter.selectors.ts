import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./counter.reducer";

const getCounterState = createFeatureSelector<State>('counter');

export const getCount = createSelector(getCounterState, state => {
  return state.count;
})

export const getName = createSelector(getCounterState, state => {
  return state.personName;
})