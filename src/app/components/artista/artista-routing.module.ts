import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ArtistaListComponent } from './artista-list/artista-list.component';


const routes: Routes = [
    {
        path: 'artistas',
        component: ArtistaListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistaRoutingModule { }
