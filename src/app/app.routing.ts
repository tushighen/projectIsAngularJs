import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { LoginComponent } from './components/login.component';
import { AboutItemComponent } from './components/aboutitem.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: ':id',
        component: AboutItemComponent
      }
    ]
  },
  // {
  //   path: 'item/:id',
  //   component: AboutItemComponent
  // }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
