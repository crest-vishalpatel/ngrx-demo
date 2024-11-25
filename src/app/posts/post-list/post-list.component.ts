import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../posts.model';
import { selectPosts } from '../state/posts.selectors';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  posts$!: Observable<ReadonlyArray<Post>>;
  constructor(private store: Store) {
    this.posts$ = store.select(selectPosts);
  }
}
