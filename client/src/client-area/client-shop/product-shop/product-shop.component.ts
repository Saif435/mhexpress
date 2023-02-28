import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css'],
})
export class ProductShopComponent {
  @Input() products: any;
  @Input() collection: string;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
}
