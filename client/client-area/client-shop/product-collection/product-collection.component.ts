import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css'],
})
export class ProductCollectionComponent {
  @Input() categories: any;
}
