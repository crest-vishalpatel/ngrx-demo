import { createReducer, on } from "@ngrx/store";
import { Post } from "../posts.model";
import { addPost } from "./posts.action";



export const initialState: ReadonlyArray<Post> = [
  {
    id: '1',
    title: 'Random Title',
    description: 'Some description...'
  }
];

export const postsRedcuer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return [...state, action.post]
  })
)