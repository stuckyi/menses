import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensesCupComponent } from './menses-cup/menses-cup.component';

const routes: Routes = [
        { path: ' ', redirectTo: './home', pathMatch: 'full' },
        { path: 'menses-cup', component: MensesCupComponent },
        { path: '**', component: MensesCupComponent  }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [ RouterModule ]
})
export class AppRoutingModule { }