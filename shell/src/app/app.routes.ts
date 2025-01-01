import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { Type } from '@angular/core';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'mfe1',
        loadComponent: () => loadRemote('mfe1/Component') as Promise<Type<unknown>>
    }
];
