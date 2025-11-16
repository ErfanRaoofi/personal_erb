import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    // component: CitaLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@libs/home').then((m) => m.HomeComponent),
      },
    ],
  },
];
