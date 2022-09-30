import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8081/products/';
  constructor(private httpClient: HttpClient) {
    
  }

  getAllProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl + 'getAllProduct');
    console.log(Producto);
  }

  createProduct(producto:Producto){
    return this.httpClient.post<Producto>(this.baseUrl + 'save' , producto);
  }
  getProductId(id:number){
    return this.httpClient.get<Producto>(this.baseUrl + 'getById/' + id);
  }
  updateProduct(producto:Producto){
    return this.httpClient.put<Producto>(this.baseUrl + 'updateProducto' + producto.id,producto)
  }
}

