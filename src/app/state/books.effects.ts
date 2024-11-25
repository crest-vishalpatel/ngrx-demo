import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from '../books/book-list/books.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {
  actions$ = inject(Actions);

  constructor(private booksService: BooksService) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksApiActions.loadBooks),
      exhaustMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => BooksApiActions.retrievedBookList({ books })),
          catchError(() => of({ type: '[Books API] Books Loaded Error' }))
        )
      )
    )
  );
}
