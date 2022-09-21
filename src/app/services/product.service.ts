import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string = 'http://localhost:8080/products/';
  constructor(private httpClient: HttpClient) { 
    this.httpClient.get('http://localhost:8080/products/getAllProduct').subscribe(data => { console.log(data);
  })
  }

 getAllProductos():Observable<Producto[]>{
  return this.httpClient.get<Producto[]>(this.baseUrl + 'getAllProduct');
  console.log(Producto)
 }
 }

