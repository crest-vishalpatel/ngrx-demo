import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { provideHttpClient } from '@angular/common/http';
import { counterReducer } from './counter/state/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { postsRedcuer } from './posts/state/posts.reducer';
import { provideEffects } from '@ngrx/effects';
import { BooksEffects } from './state/books.effects';
import { todoReducer } from './state/todos/todo.reducer';
import { TodoEffects } from './state/todos/todo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({
      // books: booksReducer,
      // collection: collectionReducer,
      // counter: counterReducer,
      // posts: postsRedcuer
      todos: todoReducer
    }),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true
    }),
    provideEffects(TodoEffects)
  ]
};
