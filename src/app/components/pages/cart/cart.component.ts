import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ShoppingCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
