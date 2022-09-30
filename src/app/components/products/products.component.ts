import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  producto: any;

  productos: Producto[];
  constructor(private productoService: ProductService,private router: Router) { }

  ngOnInit(){
     this.productoService.getAllProductos().subscribe(data => {
      this.producto = data;
      alert("ERES UNA ZORRA MAPIPAAAAAAAS!!!!")
    })
  }
editarProducto(producto:Producto):void{
localStorage.setItem("id",producto.id.toString);
this.router.navigate(['editarProducto']);
}
}
