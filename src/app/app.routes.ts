import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'layout',
    component: MainLayoutComponent,
    title: 'Main Layout',
  },
  // { path: '', redirectTo: '/welcome' },
  // {
  //   path: 'welcome',
  //   loadChildren: () =>
  //     import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  // },
];
