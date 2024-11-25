import { createAction, props } from "@ngrx/store";
import { Post } from "../posts.model";

export const addPost = createAction('[Posts Component] Add Post', props<{post: Post}>());