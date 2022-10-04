import { Usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url: String = 'http://localhost:8081/users/';
  constructor(private httpClient: HttpClient) {}


  createUser(usuario: Usuario) {
    return this.httpClient.post<Usuario>(this.url + 'saveUser', usuario);
  }
}

