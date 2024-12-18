import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-page-content',
  imports: [TreeViewComponent, ServicePracticeComponent],
  template: `
    <p>page-content works!</p>

    <h3>Exact path: {{ currentPath }}</h3>

    <h1>TreeView:</h1>
    <app-tree-view />

    <h1>Service Practice</h1>
    <app-service-practice />
  `,
  styles: `
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
