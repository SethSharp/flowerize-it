import { DbCommunicationService } from './../DB/db-communication.service';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// cart
import { CartItem } from 'src/app/services/CartItem/cart-item';
import { CartService } from '../CartItem/cart.service';

// store
import { StoreItem } from '../StoreItem/store-item';
import { StoreItemsService } from '../StoreItem/store-items.service';

// Order
import { Order } from 'src/app/Order/Order';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Dictionary that will map a id
  // items: { title: String; id: any }[] = [];
  items: StoreItem[] = [];
  // Need to hold all ids
  ids = [];

  cartItems: CartItem[] = [];

  orders: Order[] = [];

  getCartItems() {
    return this.cartItems;
  }

  constructor(
    private cartServ: CartService,
    private storeItemServ: StoreItemsService,
    private db: DbCommunicationService
  ) {}

  getAllItems() {
    return this.items;
  }

  initialiseStore() {
    this.storeItemServ.getItems().subscribe((items) => {
      this.items=items
    });
    this.cartItems = this.cartServ.getCartItems(this.items);
  }

  addItemCookie(id: string, quantity: number) {
    let item: CartItem = { id: id, quantity: quantity };
    this.cartServ.addItemCookie(item);
    var i = this.itemIndexInCart(id);
    if (i == -1) {
      this.cartItems.push(item);
      console.log("Deosn't existss");
    } else {
      this.cartItems[i].quantity += quantity;
    }
  }

  itemIndexInCart(id: string) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id == id) return i;
    }
    return -1;
  }

  deleteItem(id: string) {
    this.cartServ.removeItemFromCookie(id);
  }

  loadOrders() {
    // use a order service which will retrieve orders from DB
    let tempOrder: Order[] = [
      {
        id: '0',
        fName: 'Seth',
        lName: 'Sharp',
        ph: '04123456',
        address: '123 abc strees',
        postCode: '0123',
        state: 'WA',
        email: 'tempEmail@outlook.com',
        notes: 'Make it fast mate',
        items: [{ id: '1', quantity: 2 }], // will load the order
        tracking: '0123abcd',
      },
      {
        id: '1',
        fName: 'Sarah',
        lName: 'Smith',
        ph: '04123456',
        address: '123 abc strees',
        postCode: '0123',
        state: 'WA',
        email: 'tempEmail@outlook.com',
        notes: 'Make it fast mate',
        items: [{ id: '1', quantity: 2 }], // will load the order
        tracking: '0123abcdv2',
      },
    ];
    return tempOrder;
  }
}
