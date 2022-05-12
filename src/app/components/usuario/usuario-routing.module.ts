import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { UsuarioAreaComponent } from './usuario-area/usuario-area.component';

import { AuthGuard } from 'src/app/guard/auth.guard';



const routes: Routes = [
    {
        path: 'usuario-cad',
        component: UsuarioCadComponent,
    },
    {
        path: 'usuario-area',
        component: UsuarioAreaComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
