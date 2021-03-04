import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioCadComponent } from './usuario-cad/usuario-cad.component';



const routes: Routes = [
    {
        path: 'usuario-cad',
        component: UsuarioCadComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
