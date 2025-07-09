import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Frontpage } from './components/frontpage/frontpage';
import { Dev } from './components/dev/dev';
import { Cook } from './components/cook/cook';

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
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
