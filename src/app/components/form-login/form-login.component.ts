import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}
  
  createUser(usuario:Usuario){
this.service.createUser(usuario).subscribe((data) => {
  
  
  this.router.navigate(['listProd']);
});
  }
}
