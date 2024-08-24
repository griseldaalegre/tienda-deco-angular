import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CategoriesComponent } from './components/pages/categories/categories.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';



//importo el componente que necesito mostar segun sel path que tenga

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:products', component: ProductsComponent },
  { path: 'categories/:products/:details/:id', component: CardDetailsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'home' } // no encontradas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }