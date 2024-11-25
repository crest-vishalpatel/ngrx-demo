import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Post } from "../posts.model";

export const selectPosts = createFeatureSelector<ReadonlyArray<Post>>('posts');

export const getPosts = createSelector(
  selectPosts,
  (posts) => posts
);