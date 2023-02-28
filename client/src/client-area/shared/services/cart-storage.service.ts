import { Injectable } from '@angular/core';
import { ICartItem, ICartTotals } from '../models/cart.model';
import { IProductGet } from '../models/productGet.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartStorageService {
  private cartTotalSource = new BehaviorSubject<ICartTotals>(null);
  cartTotal$ = this.cartTotalSource.asObservable();
  products: any[] = [];
  constructor() {}

  addItemToCart(item: IProductGet, quantity: number) {
    const items = this.getCartItems() || [];
    const itemToAdd: ICartItem = this.mapProductItemToCartItem(item, quantity);
    this.addOrUpdateItem(items, itemToAdd, quantity);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
    this.getCartItems();
  }

  getCartItems() {
    this.products = JSON.parse(localStorage.getItem('cart_items')) ?? [];
    this.calculateTotals(this.products);
    return this.products;
  }

  incrementQuantity(product) {
    const index = this.products.findIndex((o) => o.id === product.id);
    this.products[index].quantity += 1;
    this.saveCart();
  }

  decrementQuantity(product) {
    const index = this.products.findIndex((o) => o.id === product.id);
    if (this.products[index].quantity > 1) {
      this.products[index].quantity -= 1;
    } else {
      this.removeItem(this.products[index]);
    }
    this.saveCart();
  }

  removeItem(product) {
    const index = this.products.findIndex((o) => o.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }

  private addOrUpdateItem(
    items: any,
    itemToAdd: ICartItem,
    quantity: number
  ): ICartItem[] {
    const index = items.findIndex((i) => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items.push(itemToAdd);
    } else {
      items[index].quantity += quantity;
    }
    return items;
  }

  private calculateTotals(cart) {
    const subtotal = cart.reduce((a, b) => b.price * b.quantity + a, 0);
    const itemsInCart = cart.reduce((a, b) => b.quantity + a, 0);
    const shipping = subtotal >= 500 ? 0 : 120;
    const total = subtotal + shipping;
    this.cartTotalSource.next({
      itemsInCart,
      shipping,
      total,
      subtotal,
    });
  }

  private mapProductItemToCartItem(
    item: IProductGet,
    quantity: number
  ): ICartItem {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      imageUrl: item.imageUrl,
      categoryName: item.categoryName,
      description: item.description,
      quantity,
    };
  }
}
