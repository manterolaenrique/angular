import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = "https://fakestoreapi.com/products"
  constructor( private http: HttpClient
  ) { }

  GetProducts (): Observable<any> {
    return this.http.get("https://fakestoreapi.com/products");
  }

}
