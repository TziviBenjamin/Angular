import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCall {
  
  baseUrl :string = 'http://127.0.0.1:5000/api/';

  constructor(private http: HttpClient){}

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  

  put(url: string, object: any, id?: any): Observable<any>{
    return this.http.put(`${this.baseUrl}${url}/${id}`, object);
  }

  post(url: string, object: any): Observable<any>{
    return this.http.post(`${this.baseUrl}${url}`, object);
  }

  delete(url: string, id: number){
    return this.http.delete(`${this.baseUrl}${url}/${id}`)
  }



}
