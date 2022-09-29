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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',         component: LoginComponent},
  { path: 'listProd', component: ProductsComponent },
  { path: 'formProd', component: FormProductsComponent },
  { path: 'formLogin', component: FormLoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    FormLoginComponent
    
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
