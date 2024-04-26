import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {

    this.getEmployeeList()
    return this._http.post('https://data-966c0-default-rtdb.firebaseio.com/data.json', data);

  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://data-966c0-default-rtdb.firebaseio.com/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    let a = this._http.get('https://data-966c0-default-rtdb.firebaseio.com/data.json');
console.log(a,"ariiun");

    return a
    
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://data-966c0-default-rtdb.firebaseio.com/${id}`);
  }


 
}
