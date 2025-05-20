import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    title: 'Home – Louise Wilkinson Nutrition',
    loadComponent: () =>
      import('./pages/home.page').then((m) => m.HomePage),
  },
];
