import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';

 import { MensesCupComponent } from './menses-cup/menses-cup.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MensesCupComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}