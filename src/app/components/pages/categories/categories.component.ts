import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product';
import { ProductCartService } from '../../services/product-cart.service';



@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnChanges {

  arrProductsCat: Product[] = [];


  constructor(private cart: ProductCartService, private apiService: ApiService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.apiService.getAll()
      .subscribe((productsList: Product[]) => {
        this.arrProductsCat = productsList;

      });
  }

  addToCart(prod: Product): void {
    this.cart.addToCart(prod);
  }
}
