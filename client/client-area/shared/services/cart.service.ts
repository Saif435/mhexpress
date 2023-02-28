// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { environment } from 'src/environments/environment';
// import { Cart, ICart, ICartItem, ICartTotals } from '../models/cart.model';
// import { IProductGet } from '../models/productGet.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   baseUrl = environment.apiUrl;

//   private cartSource = new BehaviorSubject<ICart>(null);
//   cart$ = this.cartSource.asObservable();

//   private cartTotalSource = new BehaviorSubject<ICartTotals>(null);
//   cartTotal$ = this.cartTotalSource.asObservable();

//   incrementItemQuantity(item: ICartItem) {
//     const cart = this.getCurrentCartValue();
//     const foundItemIndex = cart.items.findIndex((x) => x.id === item.id);
//     cart.items[foundItemIndex].quantity++;
//     this.setCart(cart);
//   }

//   decrementItemQuantity(item: ICartItem) {
//     const cart = this.getCurrentCartValue();
//     const foundItemIndex = cart.items.findIndex((x) => x.id === item.id);
//     if (cart.items[foundItemIndex].quantity > 1) {
//       cart.items[foundItemIndex].quantity--;
//       this.setCart(cart);
//     } else {
//       this.removeItemFromCart(item);
//     }
//   }

//   removeItemFromCart(item: ICartItem) {
//     const cart = this.getCurrentCartValue();
//     if (cart.items.some((x) => x.id === item.id)) {
//       cart.items = cart.items.filter((i) => i.id !== item.id);
//       if (cart.items.length > 0) {
//         this.setCart(cart);
//       } else {
//         this.deleteCart(cart);
//       }
//     }
//   }

// }
