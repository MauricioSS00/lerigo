import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EventoCadComponent } from './evento-cad/evento-cad.component';
import { EventoListComponent } from './evento-list/evento-list.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
    {
        path: 'evento-cad',
        component: EventoCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'evento-cad/:id',
        component: EventoCadComponent,
        canActivate: [AuthGuard]
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