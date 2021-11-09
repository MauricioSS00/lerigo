import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EspacoCadComponent } from './espaco-cad/espaco-cad.component';
import { EspacoListComponent } from './espaco-list/espaco-list.component';

const routes: Routes = [
    {
        path: 'espaco-cad',
        component: EspacoCadComponent,
    },
    {
        path: 'espaco-list',
        component: EspacoListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspacoRoutingModule { }
