import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensesCupComponent } from './menses-cup/menses-cup.component';
import { PadComponent } from './pad/pad.component';
import { CottonPadComponent } from './cotton-pad/cotton-pad.component';
import { TamponComponent } from './tampon/tampon.component';

const routes: Routes = [
        { path: ' ', redirectTo: './home', pathMatch: 'full' },
        { path: 'menses-cup', component: MensesCupComponent },
        { path: 'pad', component: PadComponent },
        { path: 'cotton-pad', component: CottonPadComponent },
        { path: 'tampon', component: TamponComponent },
        { path: '**', component: MensesCupComponent  }
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [ RouterModule ]
})
export class AppRoutingModule { }