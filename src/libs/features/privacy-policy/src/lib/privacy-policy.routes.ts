import { Routes } from '@angular/router';

export const privacyPolicyRoutes: Routes = [
  {
    path: '',
    title: 'Privacy Policy – Louise Wilkinson Nutrition',
    loadComponent: () =>
      import('./pages/privacy-policy.page').then((m) => m.PrivacyPolicyPage),
  },
];
