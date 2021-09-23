import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventoCadComponent } from './evento-cad/evento-cad.component';
import { EventoListComponent } from './evento-list/evento-list.component';

const routes: Routes = [
    {
        path: 'evento-cad',
        component: EventoCadComponent,
    },
    {
        path: 'evento-list',
        component: EventoListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventoRoutingModule { }