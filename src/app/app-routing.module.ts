import { CheckoutComponent } from './checkout/checkout.component';
import { WarningComponent } from './warning/warning.component';
import { CartComponent } from './cart/cart.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path:"store", component: StoreComponent},
  {path:"admin", component: AdminComponent},
  {path: "admin/edit", component: AdminComponent},
  {path: "admin/orders", component: OrdersComponent},
  {path: "cart", component: CartComponent},
  {path: "access-denied", component: WarningComponent},
  {path: "checkout", component: CheckoutComponent},
  {path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
