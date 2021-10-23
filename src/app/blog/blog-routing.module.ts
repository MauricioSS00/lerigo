import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
    {
        path: 'blog-list',
        component: BlogListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }