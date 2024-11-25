import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './state/books.effects';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  // {
  //   path: 'counter',
  //   component: CounterComponent
  // },
  // {
  //   path: 'posts',
  //   component: PostListComponent,
  //   children: [
  //     {
  //       path: 'create',
  //       component: CreatePostComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'books',
  //   providers: [
  //     provideEffects(BooksEffects)
  //   ],
  //   loadComponent: () => import('./books/books.component').then(c => c.BooksComponent),
  // }
];
