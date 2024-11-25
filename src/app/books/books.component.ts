import { Component, OnInit } from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { Store } from '@ngrx/store';
import { BooksService } from './book-list/books.service';
import { Observable } from 'rxjs';
import { Book } from './book-list/books.model';
import { selectBookCollection, selectBooks } from '../state/books.selectors';
import { BooksActions, BooksApiActions } from '../state/books.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookListComponent, BookCollectionComponent, AsyncPipe],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit {
  books$!: Observable<ReadonlyArray<Book>>;
  bookCollection$!: Observable<ReadonlyArray<Book>>;

  constructor(
    private store: Store
  ) {
    this.books$ = this.store.select(selectBooks);
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  ngOnInit(): void {
    // this.booksService
    //   .getBooks()
    //   .subscribe((books) => this.store.dispatch(BooksApiActions.retrievedBookList({books})))
    this.store.dispatch(BooksApiActions.loadBooks());
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

}
