import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { TodoComponent } from './todo/todo.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-page-content',
  imports: [TreeViewComponent, ServicePracticeComponent, TodoComponent],
  template: `
    <div class="wrapper">
      <app-todo />
      <h3>Exact path: {{ currentPath }}</h3>

      <h1>TreeView:</h1>
      <app-tree-view />

      <h1>Service Practice</h1>
      <app-service-practice />
    </div>
  `,
  styles: `
    .wrapper {
      overflow: auto;
      height: 100%;
    }
    h3 {
      color: red;
      font-size: 2rem;
    }
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
