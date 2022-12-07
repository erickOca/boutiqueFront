import { DetailsProductoComponent } from './components/products/details-producto/details-producto.component';

import { FormProductsComponent } from './components/form-products/form-products.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'FormProduct', component: FormProductsComponent },
  { path: '', component: ProductsComponent },
  { path: 'lista', component: ProductsComponent },
  { path: 'lista/:nombre', component: ProductsComponent },
  { path: 'detalle/:id', component: DetailsProductoComponent },
  { path: 'FormProduct/:id', component: FormProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
