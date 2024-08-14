import { Component } from '@angular/core';
import { ProductCartService } from '../services/product-cart.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  //guardo el observable del arr de prod
  favoriteList$: Product[] = [];
  itemCounter: number = 0;
  total: number = 0;


  constructor(private cart: ProductCartService) {

  }

  ngOnInit(): void {
    this.cart.favoriteList.subscribe(favoriteList => {
      this.itemCounter = favoriteList.length;
      this.favoriteList$ = favoriteList;
      this.totalPrice();
    });
  }

  deleteToFavorite(prod: Product): void {
    this.cart.deleteToCart(prod);
  }

  totalPrice() {
    this.total = this.cart.totalPrice();
    console.log(this.total);
  }

  restMore(prod: Product): void {

    if (prod.quantity >= 1) {
      this.cart.addMore(prod, prod.quantity - 1)
    }
  }
  addMore(prod: Product): void {

    this.cart.addMore(prod, prod.quantity + 1);

  }


}

