import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.apiUrl;

  getAllFaqs(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/api/Faq');
  }
}
