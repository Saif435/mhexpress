import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientAreaComponent } from './client-area.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientCartComponent } from './client-cart/client-cart.component';
import { ClientCheckoutComponent } from './client-checkout/client-checkout.component';
import { ClientShopComponent } from './client-shop/client-shop.component';
import { ProductDetailsComponent } from './client-shop/product-details/product-details.component';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { OrderFailedComponent } from './shared/components/order-failed/order-failed.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { ProductCollectionComponent } from './client-shop/product-collection/product-collection.component';

const routes: Routes = [
  {
    path: '',
    component: ClientAreaComponent,
    children: [
      { path: '', component: ClientHomeComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'shop/:category', component: ClientShopComponent },
      { path: 'shop/product/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: ClientCartComponent },
      { path: 'checkout/:id/information', component: ClientCheckoutComponent },
      {
        path: 'order/:cartid/:orderid/success',
        component: OrderSuccessComponent,
      },
      { path: 'order/:cartid/failed', component: OrderFailedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientAreaRoutingModule {}
