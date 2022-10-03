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
     this.getProducto();
  }


editarProducto(producto:Producto):void{
localStorage.setItem("id",producto.id.toString);
this.router.navigate(['editarProducto']);
}

getProducto(){
  this.productoService.getAllProductos().subscribe(data => {
  this.producto = data;
  console.log(this.producto);
})}

getCategoria(categoria:String){
  this.productoService.getByCategoria(categoria).subscribe(data =>{
    this.producto = data;
    console.log(this.producto);
  })}

}
