import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store} from '@ngrx/store';
import { BooksService } from './books/book-list/books.service';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions } from './state/books.actions';
import { HeaderComponent } from './shared/components/header/header.component';
import { TodoComponent } from "./todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    // HeaderComponent,
    TodoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';

  ngOnInit(): void {}
}
