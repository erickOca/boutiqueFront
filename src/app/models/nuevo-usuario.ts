export class NuevoUsuario {
  nombre: String;

  nombreUsuario: String;

  email: String;

  password: String;

  authorities: String[];
  constructor(
    nombre: string,
    nombreUsuario: string,
    email: string,
    password: string
  ) {
    this.nombre = nombre;
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.password = password;
  }
}
