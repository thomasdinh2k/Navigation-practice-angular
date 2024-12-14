import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { WelcomeComponent } from './welcome.component';

export const WELCOME_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'layout', component: MainLayoutComponent },
];
