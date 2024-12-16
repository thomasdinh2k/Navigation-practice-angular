import { Routes } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   component: MainLayoutComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: 'test',
    component: PageContentComponent,
  },
  {
    path: '**',
    component: PageContentComponent,
  },
];
