import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProdutorListComponent } from './produtor-list/produtor-list.component';

const routes: Routes = [
    {
        path: 'produtores',
        component: ProdutorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutorRoutingModule { }