import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  private _favoriteList: Product[] = [];

  favoriteList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private apiService: ApiService) { }

  addToCart(prod: Product) {
    let item: Product | undefined = this._favoriteList.find((prod1) => prod1.title === prod.title);
    if (!item) {
      prod.quantity = 1;
      this._favoriteList.push({ ...prod });
    } else {
      this.deleteToCart(prod);
    }
    this.favoriteList.next(this._favoriteList);
  }

  deleteToCart(prod: Product) {
    let index = this._favoriteList.findIndex((prod1) => prod1.title === prod.title);
    if (index !== -1) {
      this._favoriteList.splice(index, 1);

      this.apiService.updateProductList(prod);
      this.favoriteList.next(this._favoriteList);
    } else {
      console.warn("no válido para eliminar.");
    }
  }

  totalPrice(): number {
    let total: number = 0;
    for (let i = 0; i < this._favoriteList.length; i++) {
      total += this._favoriteList[i].price * this._favoriteList[i].quantity;
    }
    return total;
  }

  addMore(product: Product, quantity: number) {

    console.log(quantity)
    let index = this._favoriteList.findIndex((prod1) => prod1.id === product.id);
    this._favoriteList[index].quantity = quantity;
    this.favoriteList.next(this._favoriteList);

  }
}