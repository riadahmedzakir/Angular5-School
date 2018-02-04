import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-car';


@Injectable()
export class DataService {

    constructor() {

    }

    getCars(): Car[] {
        return CARS;
    }

    save(car: Car) {
        CARS.push(car);
    }
}