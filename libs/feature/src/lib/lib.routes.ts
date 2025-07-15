import { Route } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';

export const authRoutes: Route[] = [
  {
  path: '',
  component: Auth,
  children: [
    {
      path: '',
      component: Login,
    },
  ],
  }
];
