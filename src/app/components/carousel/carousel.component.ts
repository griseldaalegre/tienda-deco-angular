import { Component, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ApiService } from '../services/api.service';
import { ProductCartService } from '../services/product-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  arrProductsCat: Product[] = [];
  product: Product | undefined;
  

  constructor(private route: ActivatedRoute ,private cart: ProductCartService, private apiService: ApiService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.apiService.getAll()
      .subscribe((productsList: Product[]) => {
        this.arrProductsCat = productsList;
      });

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
  


}
