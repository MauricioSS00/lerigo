import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArtistaCadComponent } from './artista-cad/artista-cad.component';

const routes: Routes = [
    {
        path: 'artista-cad',
        component: ArtistaCadComponent,
    },
    {
        path: 'artista-list',
        component: ArtistaCadComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtistaRoutingModule { }
