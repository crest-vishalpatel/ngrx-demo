import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './books.model';
import { JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, JsonPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  @Input()
  books: ReadonlyArray<Book> = [];

  @Output()
  add = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.books);
  }
}
