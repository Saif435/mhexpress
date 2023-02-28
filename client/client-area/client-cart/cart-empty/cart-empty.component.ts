import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-empty',
  templateUrl: './cart-empty.component.html',
  styleUrls: ['./cart-empty.component.css'],
})
export class CartEmptyComponent {
  constructor(private router: Router) {}
  goToShop() {
    this.router.navigate(['/shop/all']);
  }
}
