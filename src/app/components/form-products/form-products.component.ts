import { ProductService } from './../../services/product.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.css'],
})
export class FormProductsComponent implements OnInit {

  producto: Producto = new Producto();

  constructor(private service: ProductService,private router: Router) {}

  ngOnInit(): void {}

  guardar(producto: Producto) {
    this.service.createProduct(producto).subscribe((data) => {
      alert('se agrego nuevo producto!!');
      this.router.navigate(['listProd']);
    });
  }
}
