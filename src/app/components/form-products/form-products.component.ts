import { Producto } from 'src/app/models/producto';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css'],
})
export class FormProductsComponent implements OnInit {
  producto: Producto = new Producto();
  generos = ['Hombre', 'Mujer'];
  tallas = ['36/38','40/42','44/46','48/50']
  temporadas = ['Verano','invierno','otoño','primavera']
  constructor(private service: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.cargar();
  }

  guardar(producto: Producto) {
    this.service.createProduct(producto).subscribe((data) => {
      alert('se agrego nuevo producto!!');
      this.router.navigate(['lista']);
    });
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=> {
      let id=e['id'];
      if(id){
        this.service.getProductId(id).subscribe(
          es=>this.producto=es
        );
      }
  }
    );
}

update(): void{
  this.service.updateProducto(this.producto).subscribe(
    e=>this.router.navigate(['lista'])
  )
}
}
