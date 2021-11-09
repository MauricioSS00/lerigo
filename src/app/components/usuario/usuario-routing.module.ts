import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';
import { UsuarioAreaComponent } from './usuario-area/usuario-area.component';



const routes: Routes = [
    {
        path: 'usuario-cad',
        component: UsuarioCadComponent,
    },
    {
        path: 'usuario-area',
        component: UsuarioAreaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
