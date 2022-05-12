import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EspacoCadComponent } from './espaco-cad/espaco-cad.component';
import { EspacoListComponent } from './espaco-list/espaco-list.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
    {
        path: 'espaco-cad',
        component: EspacoCadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'espaco-cad/:id',
        component: EspacoCadComponent,
        canActivate: [AuthGuard]
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
