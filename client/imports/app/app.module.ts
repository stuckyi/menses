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


import { IntroComponent } from './menses-cup/intro/intro.component';


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
    IntroComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}