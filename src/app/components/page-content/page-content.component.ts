import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObservablePracticeComponent } from './observable-practice/observable-practice.component';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { TodoComponent } from './todo/todo.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [
    TreeViewComponent,
    ServicePracticeComponent,
    TodoComponent,
  ],
  template: `
    <div class="wrapper">
      <app-todo />

      <h3>Exact path: {{ currentPath }}</h3>

      <h1>TreeView:</h1>
      <app-tree-view />

      <h1>Service Practice</h1>
      <app-service-practice />

      <h1>Observable Practice</h1>
    </div>
  `,
  styles: `
  `,
})
export class PageContentComponent {
  currentPath: string = 'Hello';

  ngOnInit(): void {
    this.currentPath = this.route.snapshot.url
      .map((item) => item.path)
      .join('/');

    console.log('Route', this.currentPath);
  }

  constructor(private route: ActivatedRoute) {}
}
