import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProdutorCadComponent } from './produtor-cad/produtor-cad.component';
import { ProdutorListComponent } from './produtor-list/produtor-list.component';

const routes: Routes = [
    {
        path: 'produtor-cad',
        component: ProdutorCadComponent,
    },
    {
        path: 'produtor-list',
        component: ProdutorListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutorRoutingModule { }