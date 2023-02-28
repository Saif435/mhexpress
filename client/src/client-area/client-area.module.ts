import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientAreaRoutingModule } from './client-area-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavScrollDirective } from './shared/directives/nav-scroll.directive';

import { ClientAreaComponent } from './client-area.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ClientShopComponent } from './client-shop/client-shop.component';
import { ProductDetailsComponent } from './client-shop/product-details/product-details.component';
import { ClientCartComponent } from './client-cart/client-cart.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NumberInputComponent } from './shared/components/number-input/number-input.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ClientCheckoutComponent } from './client-checkout/client-checkout.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ShippingDetailsComponent } from './client-checkout/shipping-details/shipping-details.component';
import { OrderDetailsComponent } from './client-checkout/order-details/order-details.component';
import { OrderFailedComponent } from './shared/components/order-failed/order-failed.component';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { CartSummaryComponent } from './client-cart/cart-summary/cart-summary.component';
import { CartTotalsComponent } from './client-cart/cart-totals/cart-totals.component';
import { CartEmptyComponent } from './client-cart/cart-empty/cart-empty.component';
import { ProductCollectionComponent } from './client-shop/product-collection/product-collection.component';
import { ProductShopComponent } from './client-shop/product-shop/product-shop.component';
import { LocationInfoComponent } from './client-home/location-info/location-info.component';

@NgModule({
  declarations: [
    ClientAreaComponent,
    ClientHomeComponent,
    NavbarComponent,
    ClientShopComponent,
    ProductDetailsComponent,
    ClientCartComponent,
    HeaderComponent,
    NumberInputComponent,
    FooterComponent,
    NavScrollDirective,
    ClientCheckoutComponent,
    BannerComponent,
    ShippingDetailsComponent,
    OrderDetailsComponent,
    OrderFailedComponent,
    OrderSuccessComponent,
    FaqComponent,
    ContactComponent,
    CartSummaryComponent,
    CartTotalsComponent,
    CartEmptyComponent,
    ProductCollectionComponent,
    ProductShopComponent,
    LocationInfoComponent,
  ],
  imports: [
    CommonModule,
    ClientAreaRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [ClientAreaComponent],
})
export class ClientAreaModule {}
