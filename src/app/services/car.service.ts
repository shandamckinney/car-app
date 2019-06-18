import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import cars from '../cars/car-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private cars: Car[];
  private http: HttpClient;
  constructor(private http:HttpClient) {
    this.cars = cars;
   }

  getCarById(carID:number){
    return this.http.get(`http://localhost:3000/cars/${carID}`);
  }
  getCars(){
    return this.http.get('http://localhost:3000/cars');
  } 

  addCar(car: Car):Observable<any>{
    console.log('Submited', car)
    this.cars.push(car);
    return this.http.post('http://localhost:3000/cars', car);

  }

  deleteCar(carID: number){
    return this.http.delete('http://localhost:3000/cars/' + carID);
  }

  editCar(car: Car){
    return this.http.put(`http://localhost:3000/cars/${car.id}` , car);
  }
}
