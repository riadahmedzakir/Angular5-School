import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootAppComponent } from './rootApp.component';


@NgModule({
  declarations: [
    RootAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootAppComponent]
})
export class AppModule { }
