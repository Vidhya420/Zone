/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getZonelist() {
    throw new Error('Method not implemented.');
  }

  private apiUrl = '';

  constructor(private http: HttpClient) {
 
   }
addzone(data:any):Observable<any>{
  return this.http.post('',data);
}


getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
 */