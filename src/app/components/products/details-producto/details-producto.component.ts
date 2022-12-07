import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-producto',
  templateUrl: './details-producto.component.html',
  styleUrls: ['./details-producto.component.css'],
})
export class DetailsProductoComponent implements OnInit {
  producto: Producto;
  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {}

  volver(): void {
    this.router.navigate(['lista']);
  }
}
