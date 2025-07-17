import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Frontpage } from './components/frontpage/frontpage';
import { Dev } from './components/dev/dev';
import { Cook } from './components/cook/cook';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    App,
    Navbar,
    Frontpage,
    Dev,
    Cook
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
