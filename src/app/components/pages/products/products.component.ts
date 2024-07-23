import { Component } from '@angular/core';
import { CardMiniComponent } from "../../card-mini/card-mini.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardMiniComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
