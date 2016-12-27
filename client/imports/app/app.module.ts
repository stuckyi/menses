import { WindowRef } from './WindowRef';
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

import { McDefinitionComponent } from './menses-cup/mc-definition/mc-definition.component';
import { McUsageComponent } from './menses-cup/mc-usage/mc-usage.component';
import { McHistoryComponent } from './menses-cup/mc-history/mc-history.component';
import { McProductComponent } from './menses-cup/mc-product/mc-product.component';

import { McPrincipleComponent } from './menses-cup/mc-principle/mc-principle.component';
import { McProsConsComponent } from './menses-cup/mc-proscons/mc-proscons.component';


import { PadIntroComponent } from './pad/pad-intro/pad-intro.component';


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
      PadIntroComponent,
    CottonPadComponent,
    Page404Component,
    McProductComponent,
      McUsageComponent,
      McHistoryComponent,
      McPrincipleComponent,
    McProsConsComponent,
      McDefinitionComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[ WindowRef ]
})
export class AppModule {}