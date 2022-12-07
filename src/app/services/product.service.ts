import { Producto } from './../models/producto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = 'http://localhost:8081/products/';
  constructor(private httpClient: HttpClient) {}

  getAllProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl + 'getAllProduct');
  }

  getByCategoria(categoria: String) {
    return this.httpClient.get<Producto>(
      this.baseUrl + 'getByCategoria' + categoria
    );
  }

  createProduct(producto: Producto) {
    return this.httpClient.post<Producto>(this.baseUrl + 'save', producto);
  }
  getProductId(id: number) {
    return this.httpClient.get<Producto>(this.baseUrl + 'getById/' + id);
  }
  getByTalla(talla: String) {
    return this.httpClient.get<Producto[]>(this.baseUrl + 'getByTalla' + talla);
  }
  getByTemporada(temporada: String) {
    return this.httpClient.get<Producto[]>(
      this.baseUrl + 'getByTemporada' + temporada
    );
  }
  getByGenero(genero: String) {
    return this.httpClient.get<Producto[]>(
      this.baseUrl + 'getByGenero' + genero
    );
  }
  findByNombre(nombre: String): Observable<Object> {
    return this.httpClient.get<Producto[]>(
      this.baseUrl + 'findByNombre/' + nombre
    );
  }
  deleteProduct(idProducto: number): Observable<Object> {
    return this.httpClient.delete<Producto>(
      this.baseUrl + 'delete/' + idProducto
    );
  }
  updateProducto(producto: Producto) {
    return this.httpClient.put<Producto>(
      this.baseUrl + 'updateProducto', producto
    );
  }
}
