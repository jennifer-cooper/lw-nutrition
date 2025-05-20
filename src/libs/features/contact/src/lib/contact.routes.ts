import { Routes } from '@angular/router';

export const contactRoutes: Routes = [
  {
    path: '',
    title: 'Contact – Louise Wilkinson Nutrition',
    loadComponent: () =>
      import('./pages/contact.page').then((m) => m.ContactPage),
  },
];
