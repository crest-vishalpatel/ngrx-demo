import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book-list/books.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [NgFor],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.scss'
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
