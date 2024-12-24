//@ts-nocheck
import { Component } from '@angular/core';

@Component({
  selector: 'app-observable-practice',
  imports: [],
  templateUrl: './observable-practice.component.html',
  styleUrl: './observable-practice.component.scss',
})
export class ObservablePracticeComponent {
  constructor() {
    const Observable = (subscribe) => {
      this.subscribe = subscribe; // Store the subscribe function on the Observable instance
    };
    // Obsservable constructor

    const one$ = new Observable((observer) => {
      observer.next(1);
      observer.complete();
    });

    one$.subscribe({
      next: (value) => console.log(value),
    });
  }
}
