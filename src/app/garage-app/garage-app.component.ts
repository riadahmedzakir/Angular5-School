import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarComponent } from './../car/car.component';
import { Car } from '../car';

@Component({
  selector: 'app-garage-app',
  templateUrl: './garage-app.component.html',
  styleUrls: ['./garage-app.component.css']
})
export class GarageAppComponent implements OnInit {
  constructor() { }

  @Input() car: Car;
  
  ngOnInit() {
  }

}
