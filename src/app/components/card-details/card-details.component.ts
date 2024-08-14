import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../models/product';
import { ProductCartService } from '../services/product-cart.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']

})
export class CardDetailsComponent implements OnInit {
  product: Product | undefined;
  @Input() prod!: Product; //unput de la api
  textButton: String = 'Guardar';
  constructor(private route: ActivatedRoute, private apiService: ApiService, private productCartService: ProductCartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.findProduct(Number(id));
    });
  }


  findProduct(id: number) {
    this.product = this.apiService.findProduct(id);
    if (this.product) {
      console.log('Producto encontrado:', this.product);
    } else {
      console.log('Producto no encontrado');
    }
  }
  
  addFavorite(product: Product): void {
    this.product!.favorite = !this.product!.favorite;
    this.productCartService.addToCart(this.product!)
  }
}
