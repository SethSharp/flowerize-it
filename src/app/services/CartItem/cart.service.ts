
import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartItems:CartItem[] = [];
  CART_ID = "cart";

  constructor(private cookie: CookieService) {}

  // Will need to access DB to get ID values, since cart stores id, for space saving
  getCartItems(idDict:any){
    if (this.cartItems.length != 0) return this.cartItems;

    // Amount of stuff we are storing isn' a lot, so a seperate cookie for a little string
    // eg: cookie name, id of item, value is quantity
    // temporary, will get all ids from DB once implemetned
    for (var i = 0; i < idDict.length; i++) {
      let id = idDict[i].id.toString();
      if (this.cookieExists(id)) {
        let q: number = +this.cookie.get(id);
        let newItem:CartItem = {id:id,quantity:q};
        this.cartItems.push(newItem);
      } // Not going to add to cart if empty, nor create new cookie
    }
    return this.cartItems;
  }

  cookieExists(val:string) {
    return this.cookie.check(val);
  }

  addItemCookie(item:CartItem) { // ie: add to cart
    let id = item.id;
    let quantity = item.quantity;
    if (this.cookieExists(id)) {
      let prev_q:number = +this.cookie.get(id); // gets old quantity
      let new_q = prev_q+quantity;
      console.log(id, quantity)
      this.cookie.set(id, new_q.toString());
    } else {
      this.cookie.set(id, quantity.toString());
    }
  }

  editItemCookie(id:string, quantity:string) { // n
    this.cookie.set(id, quantity)
  }

  removeItemFromCookie(id:string) { // This will probably be to delete from cart, which
    if (this.cookieExists(id)) {
      this.cookie.delete(id);
    }
  }
}
