import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../state/counter.reducer';
import { changeName, customIncrement } from '../state/counter.actions';
import { getName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.scss'
})
export class CustomCounterInputComponent {
  step!: number;
  personName$: Observable<string>;

  constructor(private store: Store<{counter: State}>) {
    this.personName$ = this.store.select(getName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({value: Number(this.step)}));
  }

  onChangeName() {
    this.store.dispatch(changeName())
  }
}
