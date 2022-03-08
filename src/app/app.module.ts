import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  appInitializer } from './_helpers/app.initializer';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
