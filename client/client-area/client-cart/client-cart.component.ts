import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {
  ICartItem,
  ICartTotals,
} from 'src/client-area/shared/models/cart.model';
import { CartStorageService } from '../shared/services/cart-storage.service';

@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.css'],
})
export class ClientCartComponent {
  items: any = [];
  cartTotals$: Observable<ICartTotals>;
  constructor(private cartStorageService: CartStorageService) {}

  ngOnInit() {
    this.items = this.cartStorageService.getCartItems();
    this.cartTotals$ = this.cartStorageService.cartTotal$;
  }

  removeCartItem(item: ICartItem) {
    this.cartStorageService.removeItem(item);
    this.items = this.cartStorageService.getCartItems();
  }

  incrementCartItem(item: ICartItem) {
    this.cartStorageService.incrementQuantity(item);
    this.items = this.cartStorageService.getCartItems();
  }

  decrementCartItem(item: ICartItem) {
    this.cartStorageService.decrementQuantity(item);
    this.items = this.cartStorageService.getCartItems();
  }
}
