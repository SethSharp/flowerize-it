import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from './services/Shared/shared.service';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    public shared: SharedService,
    private c: CookieService
  ) {}
    //
  ngOnInit() {
    // Initialises the data, so then it doesn't need to be retrieved again...
    this.shared.initialiseStore();
    // this.deleteCookies();
  }

  openCart() {
    // will open a card/pop up which will display the cart
    this.dialog.open(ViewCartComponent, {
      width: '20rem',
      height: '23.4rem',
      panelClass: 'cart-class',
      position: { top: '6.6rem' },
      data: {
        items: this.shared.cartItems,
      },
    });
  }

  deleteCookies() {
    let ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var i = 0; i < ids.length; i++) {
      this.c.delete(ids[i]);
    }
  }
}
