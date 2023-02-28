import { Component } from '@angular/core';
import { CartStorageService } from 'src/client-area/shared/services/cart-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private cartStorageService: CartStorageService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    const token = localStorage.getItem('cart_items');
    if (token) {
      this.cartStorageService.getCartItems();
    }
  }
}
