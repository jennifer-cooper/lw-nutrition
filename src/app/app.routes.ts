import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../libs/features/home/src/lib/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../libs/features/contact/src/lib/contact.routes').then((m) => m.contactRoutes),
  },
  {
    path: 'faqs',
    loadChildren: () =>
      import('../libs/features/faq/src/lib/faq.routes').then((m) => m.faqRoutes),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('../libs/features/privacy-policy/src/lib/privacy-policy.routes').then((m) => m.privacyPolicyRoutes),
  },
];
