import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RootAppComponent } from './rootApp.component';
import { GarageAppComponent } from './garage-app/garage-app.component';
import { CarComponent } from './car/car.component';
import { DataService } from './data-service';


@NgModule({
  declarations: [
    RootAppComponent,
    GarageAppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [
    DataService
  ],
  bootstrap: [RootAppComponent, GarageAppComponent, CarComponent]
})
export class AppModule { }
