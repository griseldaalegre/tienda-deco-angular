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
   alert(prod.title);
  }



}