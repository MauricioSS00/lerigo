import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'contato',
        component: ContatoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginasRoutingModule { }