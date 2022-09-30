import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
producto :Producto = new Producto();
  constructor(private router:Router, private service:ProductService) { }

  ngOnInit(): void {
    this.editar
  }
 editar(){
  let id=localStorage.getItem("id");
this.service.getProductId(this.producto.id)
.subscribe(data=>{
  this.producto=data;
  
  this.router.navigate(['listProd']);
})
 }
 update(producto:Producto){
  this.service.updateProduct(producto).subscribe(data=>{this.producto=data;
  alert('MAPIPA ASQUEROSA ACTUALIZADA');
  })
 }
}
