import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data-service';
import { Car } from '../car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];
  car: Car = {
    carID: '',
    carName: '',
    regNo: ''
  };

  // @Output() messageEvent = new EventEmitter<boolean>();

  garageView: Boolean = true;

  constructor(private dataService: DataService) {
    this.cars = dataService.getCars();
    //console.log(this.cars);
    //console.log(this.cars[0].carID);
  }

  ngOnInit() {
  }

  // viewDetials(car: Car) {
  //   this.car = car;
  // }

  addCar(car: Car) {
    //console.log("addCar")
    this.dataService.save(car);
    this.garageView = true;
  }

  changeView() {
    if (this.garageView == true) {
      this.garageView = false;
    }
    else if (this.garageView == false) {
      this.garageView = true;
    }
  }
}
