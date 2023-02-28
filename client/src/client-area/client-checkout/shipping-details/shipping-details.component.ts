import { Component, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { ICartTotals } from 'src/client-area/shared/models/cart.model';
import { IOrderHeader } from 'src/client-area/shared/models/order.model';
import { OrderService } from 'src/client-area/shared/services/order.service';

declare var myFunction: any;
@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css'],
})
export class ShippingDetailsComponent {
  @Input() cartTotals$: ICartTotals;
  Left = faChevronLeft;

  order: IOrderHeader = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    suburb: '',
    phoneNumber: '',
    paymentToken: '',
  };

  constructor(
    private orderService: OrderService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    window['angularComponentReference'] = {
      component: this,
      zone: this.ngZone,
      loadAngularFunction: (id: string) => {
        this.order.paymentToken = id;
        this.addOrder();
      },
    };
  }

  pay() {
    myFunction(this.cartTotals$.total * 100);
  }

  addOrder() {
    this.orderService.addOrder(this.fusion()).subscribe({
      next: (response) => {
        this.order.id = response.orderId;
      },
      error: (error) => {
        this.router.navigate(['order', 'uhuh', 'failed']);
        console.log(error);
      },
      complete: () => {
        this.router
          .navigate([
            'order',
            'this.cartTotals$.cartId',
            this.order.id,
            'success',
          ])
          .then(() => {
            localStorage.removeItem('cart_id');
            window.location.reload();
          });
      },
    });
  }

  fusion() {
    return Object.assign(this.order, this.cartTotals$);
  }

  backToCart() {
    this.router.navigate(['cart']);
  }
}
