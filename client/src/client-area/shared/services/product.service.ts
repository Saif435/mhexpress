import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductGet } from '../models/productGet.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  getProducts(category: string, page: number): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + '/api/ProductGet/' + category + '/' + page
    );
  }

  getProductById(id: string): Observable<IProductGet> {
    return this.http.get<IProductGet>(this.apiUrl + '/api/ProductGet/' + id);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/api/Category');
  }
}
