import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TestForm1Component } from './test-form1/test-form1.component';

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
        path: 'testForm1',
        component: TestForm1Component,
        title: 'Test Form 1'
    }
];
