import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  addOrder(order: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/api/Order/', order);
  }
}
