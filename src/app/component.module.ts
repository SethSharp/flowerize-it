
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { MaterialModule } from './material.module';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { FullCartComponent } from './full-cart/full-cart.component';
import { WarningComponent } from './warning/warning.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FilterOrdersPipe } from './orders/filter-orders.pipe';
import { SendOrderComponent } from './orders/send-order/send-order.component';
import { FilterItemsPipe } from './admin/filter-items.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    StoreComponent,
    CartComponent,
    CustomCardComponent,
    ViewCartComponent,
    CartItemsComponent,
    AddItemComponent,
    ItemsComponent,
    AdminComponent,
    OrdersComponent,
    LoginComponent,
    FullCartComponent,
    WarningComponent,
    ViewItemComponent,
    CheckoutComponent,
    FilterOrdersPipe,
    SendOrderComponent,
    FilterItemsPipe,
  ],
  exports: [],
  imports: [CommonModule, FormsModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentModule {}
