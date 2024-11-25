import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../state/counter.reducer';
import { getCount } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {
  count$: Observable<number>;
  constructor(private store: Store<{counter: State}>) {
    this.count$ = store.select(getCount);
  }

}
