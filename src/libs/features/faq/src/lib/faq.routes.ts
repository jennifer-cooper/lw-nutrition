import { Routes } from '@angular/router';

export const faqRoutes: Routes = [
  {
    path: '',
    title: 'FAQs – Louise Wilkinson Nutrition',
    loadComponent: () =>
      import('./pages/faq.page').then((m) => m.FaqPage),
  },
];
