import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
