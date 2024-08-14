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
  cantidad = 20;

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
              favorite: false,
              quantity: 0
            }
            this.productsList.push(product);
          }
        }
      )
    }
    return of(this.productsList);
  }

  public updateProductList(prod: Product) {
    let index = this.productsList.findIndex((prod1) => prod1.title === prod.title);
    this.productsList[index].favorite = false;
  }


  public findProduct(id: number): Product | undefined {
    return this.productsList.find((prod) => prod.id === id);
  }
}
