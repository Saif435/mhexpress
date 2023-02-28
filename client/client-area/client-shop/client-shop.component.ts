import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-client-shop',
  templateUrl: './client-shop.component.html',
  styleUrls: ['./client-shop.component.css'],
})
export class ClientShopComponent {
  products: any = [];
  categories: any = [];
  page: number;
  collection: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.page = params['page'];
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  pageChangeEvent(event: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: { page: event },
    };
    this.router.navigate(['shop', this.collection], navigationExtras);

    this.page = event;
    this.getAllProducts();
  }

  getAllProducts() {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.collection = params.get('category');
        if (this.collection) {
          this.productService
            .getProducts(this.collection, this.page)
            .subscribe({
              next: (response) => {
                this.products = response;
              },
            });
        }
      },
    });
  }

  getAllCategories() {
    this.productService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
    });
  }
}
