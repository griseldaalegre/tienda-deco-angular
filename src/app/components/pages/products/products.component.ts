import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CardMiniComponent } from "../../card-mini/card-mini.component";
import { Product } from '../../models/product';
import { ProductCartService } from '../../services/product-cart.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CardMiniComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges {

  arrProducts: Product[] = [];
  arrFavoritesProducts: Product[] = [];
  constructor(private cart: ProductCartService, private apiService: ApiService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.apiService.getAll()
      .subscribe((productsList: Product[]) => {
        this.arrProducts = productsList;

      });
  }

  addToCart(prod: Product): void {
    this.cart.addToCart(prod);
  }

}
