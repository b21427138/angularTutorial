import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Test1Component } from './test1/test1.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    }, {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    }, {
        path: 'testPath1',
        component: Test1Component,
        title: 'Test Path 1'
    }
];
