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

  constructor(private productoService: ProductService) { }

  ngOnInit(){
    this.productoService.getAllProductos().subscribe(data => {
      this.producto = data;
    })
  }

}
