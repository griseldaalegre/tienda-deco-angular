import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private URLAPI = 'https://fakestoreapi.com/products';
  productsList: Product[] = [];
  cantidad = 6;

  constructor(private http: HttpClient) { }

  getProductsFromAPI(): Observable<any> {
    return this.http.get<any>(this.URLAPI);
  }

  public getAll(): Observable<Product[]> {

    if (this.productsList.length <= 0) {
      this.getProductsFromAPI().subscribe(
        response => {
          for (let index = 0; index < this.cantidad; index++) {

            let product: Product = {
              id: response[index].id,
              title: response[index].title,
              description: response[index].description,
              price: response[index].price,
              category: response[index].category,
              image: response[index].image,
              rating: response[index].rating,
            }
            console.log(product);
            this.productsList.push(product);
          }
        }
      )
    }
    return of(this.productsList);
  }
}
