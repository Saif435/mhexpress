import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IProductGet } from 'src/client-area/shared/models/productGet.model';
import { ProductService } from 'src/client-area/shared/services/product.service';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { CartStorageService } from 'src/client-area/shared/services/cart-storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  Back = faBackward;
  product: IProductGet;
  products: any[] = [];
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartStorageService: CartStorageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('productId');
        if (id) {
          this.productService.getProductById(id).subscribe({
            next: (response) => {
              this.product = response;
            },
          });
        }
      },
    });
  }

  back() {
    this.location.back();
  }

  addToCart(product: any) {
    this.cartStorageService.addItemToCart(product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
