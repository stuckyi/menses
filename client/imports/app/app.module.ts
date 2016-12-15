import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

import { MensesCupComponent } from './menses-cup/menses-cup.component';
import { HomeComponent } from './home/home.component';
import { TamponComponent } from './tampon/tampon.component';
import { PadComponent } from './pad/pad.component';
import { CottonPadComponent } from './cotton-pad/cotton-pad.component';
import { Page404Component } from './page404.component';


import { McIntroComponent } from './menses-cup/mc-intro/mc-intro.component';
import { McUsageComponent } from './menses-cup/mc-usage/mc-usage.component';
import { McShapeComponent } from './menses-cup/mc-shape/mc-shape.component';
import { McHistoryComponent } from './menses-cup/mc-history/mc-history.component';

import { McPrincipleComponent } from './menses-cup/mc-principle/mc-principle.component';
import { McProsConsComponent } from './menses-cup/mc-proscons/mc-proscons.component';
import { McPurchasingComponent } from './menses-cup/mc-purchasing/mc-purchasing.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MensesCupComponent,
    TamponComponent,
    PadComponent,
    CottonPadComponent,
    Page404Component,
    McIntroComponent,
      McUsageComponent,
      McShapeComponent,
      McHistoryComponent,
      McPrincipleComponent,
      McProsConsComponent,
    McPurchasingComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}