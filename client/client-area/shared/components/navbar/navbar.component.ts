import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs/internal/Observable';
import { ICartTotals } from '../../models/cart.model';
import { CartStorageService } from '../../services/cart-storage.service';
import { HideService } from '../../services/hide.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  Bars = faBars;
  Close = faX;
  Bag = faShoppingBag;
  isBarOpened: boolean = false;
  cart$: Observable<ICartTotals>;

  constructor(
    public hide: HideService,
    private router: Router,
    private cartStorageService: CartStorageService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isBarOpened = false;
      }
    });
  }

  ngOnInit(): void {
    this.cart$ = this.cartStorageService.cartTotal$;
  }

  toggleBar() {
    this.isBarOpened = !this.isBarOpened;
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
