import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable } from "rxjs";
import { Sensor, TypeModel, UnitModel } from '../models/sensor.model';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl + '/sensors');
  }

  getSensor(id: number): Observable<any> {
    return this.http.get<Sensor>(`${this.baseUrl}/sensors/${id}`);
  }

  addSensor(sensor: Sensor) {
    console.log(sensor);
    return this.http.post(this.baseUrl + '/sensors', sensor, httpHeaders);
  }

  updateSensor(sensor: Sensor): Observable<any> {
    return this.http.put(this.baseUrl + '/sensors', sensor, httpHeaders);
  }

  deleteSensor(id: number) {
    return this.http.delete(this.baseUrl + '/sensors/' + id);
  }

  getTypes(): Observable<TypeModel[]> {
    return this.http.get<TypeModel[]>(this.baseUrl + '/types');
  }

  getUnits(): Observable<UnitModel[]> {
    return this.http.get<UnitModel[]>(`${this.baseUrl}/units`);
  }
}
