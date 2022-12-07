import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  tallas = ['36/38', '40/42', '44/46', '48/50'];
  temporadas = ['Verano', 'invierno', 'otoño', 'primavera'];
  producto: Producto[] = [];
  
  constructor(
    private productoService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProducto();
  }

  getProducto() {
    this.productoService.getAllProductos().subscribe((data) => {
      this.producto = data;
      console.log(this.producto);
    });
  }

  nuevo() {
    this.router.navigate(['FormProduct']);
  }

  eliminar(idProducto: number){
    this.productoService.deleteProduct(idProducto).subscribe(
      data => {
          this.getProducto();
          alert("Producto eliminado")

    });
  }
}
