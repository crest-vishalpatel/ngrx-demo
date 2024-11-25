import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Book } from "../books/book-list/books.model";

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string}>(),
    'Remove Book': props<{ bookId: string}>()
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load Books': emptyProps(),
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>()
  }
})