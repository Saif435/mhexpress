import { Component } from '@angular/core';
import { HideService } from 'src/client-area/shared/services/hide.service';
import { ICartTotals } from '../shared/models/cart.model';
import { Observable } from 'rxjs/internal/Observable';
import { CartStorageService } from '../shared/services/cart-storage.service';

@Component({
  selector: 'app-client-checkout',
  templateUrl: './client-checkout.component.html',
  styleUrls: ['./client-checkout.component.css'],
})
export class ClientCheckoutComponent {
  items: any = [];
  cartTotals$: Observable<ICartTotals>;

  constructor(
    public hide: HideService,
    private cartStorageService: CartStorageService
  ) {}

  ngOnInit() {
    this.hide.hide();
    this.items = this.cartStorageService.getCartItems();
    this.cartTotals$ = this.cartStorageService.cartTotal$;
  }

  ngOnDestroy() {
    this.hide.show();
  }
}
