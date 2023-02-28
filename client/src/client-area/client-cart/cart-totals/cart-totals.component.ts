import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICartTotals } from 'src/client-area/shared/models/cart.model';

@Component({
  selector: 'app-cart-totals',
  templateUrl: './cart-totals.component.html',
  styleUrls: ['./cart-totals.component.css'],
})
export class CartTotalsComponent {
  @Input() items: ICartTotals;

  constructor(private router: Router) {}

  goToCheckout() {
    console.log(this.items);
    this.router.navigate([
      'checkout',
      '6475de91-94ac-46e0-a171-dd53499777jk',
      'information',
    ]);
  }
}
