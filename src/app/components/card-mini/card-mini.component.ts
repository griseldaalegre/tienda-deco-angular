import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { ProductCartService } from '../services/product-cart.service';


@Component({
  selector: 'app-card-mini',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-mini.component.html',
  styleUrl: './card-mini.component.css'
})
export class CardMiniComponent {

  @Input('product')
  product: any | undefined; //para el ruteo
  @Input() prod!: Product; //unput de la api
  textButton: String = 'Guardar';

  constructor(private productCartService: ProductCartService) { } //inyecto el servicio

  addFavorite(prod: Product): void {
    this.prod!.favorite = !this.prod!.favorite;
    this.productCartService.addToCart(this.prod!)
  }

}



