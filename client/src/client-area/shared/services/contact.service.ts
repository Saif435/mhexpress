import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  addMessage(message: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/api/Contact/', message);
  }
}
