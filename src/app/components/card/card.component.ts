import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input('products')
  product: any | undefined;
  @Input() prod!: Product; 

  constructor(private router: Router) { }



}
