import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormProductsComponent } from './components/form-products/form-products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';

const routes: Routes = [
  { path: 'login',         component: LoginComponent},
  { path: '', component: ProductsComponent },
  { path: 'formProd', component: FormProductsComponent },
  { path: 'formLogin', component: FormLoginComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    FormLoginComponent,
    FormProductsComponent,
    NavbarComponent,
    CarouselComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
     FormsModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
