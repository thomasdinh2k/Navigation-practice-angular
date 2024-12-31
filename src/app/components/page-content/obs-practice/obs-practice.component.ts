import { Component, OnInit } from '@angular/core';
import { from, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-obs-practice',
  imports: [],
  templateUrl: './obs-practice.component.html',
  styleUrl: './obs-practice.component.scss',
})
export class ObsPracticeComponent implements OnInit {
  ngOnInit(): void {
    const numbers = [1, 2, 3, 4, 5];

    const observable = from(numbers)
      .pipe(
        map(val => val * 2)
      )

    observable.subscribe(res => console.log(res))
  }
}
