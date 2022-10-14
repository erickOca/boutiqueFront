import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: FormLoginComponent },
  { path: 'FormProduct', component: ProductsComponent },
  { path: 'formProd', component: FormProductsComponent },
  { path: 'lista' , component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
