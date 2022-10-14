import { JwtDto } from './../models/jwt-dto';
import { LoginUsuario } from './../models/login-usuario';
import { Observable, tap } from 'rxjs';
import { NuevoUsuario } from './../models/nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(this.authUrl + 'newUser', nuevoUsuario);
    console.log(nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.authUrl + 'login', loginUsuario)
    console.log(loginUsuario);
  }
}
