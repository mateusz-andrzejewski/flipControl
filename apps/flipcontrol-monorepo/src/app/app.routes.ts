import { Route } from '@angular/router';
import { AppComponent } from './app/app.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@flipcontrol-monorepo/auth').then((m) => m.authRoutes),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
