import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from 'src/client-area/shared/models/cart.model';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css'],
})
export class CartSummaryComponent {
  Trash = faTrashCan;

  @Input() items: any;
  @Output() remove: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() increment: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();
  @Output() decrement: EventEmitter<ICartItem> = new EventEmitter<ICartItem>();

  removeCartItem(item: ICartItem) {
    this.remove.emit(item);
  }

  incrementCartItem(item: ICartItem) {
    this.increment.emit(item);
  }

  decrementCartItem(item: ICartItem) {
    this.decrement.emit(item);
  }
}
