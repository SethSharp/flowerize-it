
import { Injectable } from '@angular/core';

// cart
import { CartItem } from './../CartItems/cart-item';
import { CartService } from '../CartItems/cart.service';

// store
import { StoreItem } from '../StoreItems/store-item';
import { StoreItemsService } from '../StoreItems/store-items.service';

// Order
import { Order } from '../Order/Order';

@Injectable({
  providedIn: 'root',
})

export class SharedService {


  // Dictionary that will map a id
  items: {title:String, id:any}[] = [];
  // Need to hold all ids
  ids = [];

  cartItems: CartItem[] = [];
  flowerItems: StoreItem[] = [];
  vaseItems: StoreItem[] = [];
  packageItems: StoreItem[] = [];
  extraItems: StoreItem[] = [];
  otherItems: StoreItem[] = [];

  orders: Order[] = [];

  getCartItems() { return this.cartItems;}
  getStoreItems() { return this.flowerItems;}
  getVaseItems() { return this.vaseItems; }
  getPackageItems() { return this.packageItems; }
  getExtraItems() { return this.extraItems; }
  getOtherItems() { return this.otherItems; }
  getFeaturedItems() { return this.getStoreItems(); } // will become more specific

  constructor(private c: CartService, private s: StoreItemsService) {}

  loadAllItems() {
    let temp:any;
    this.s.getStoreItems().subscribe((items) => {
      temp = items;
    });
    return temp;
  }

  ngOnInit(): void {}

  initialiseStore() {
    this.loadStoreItems();
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartItems = this.c.getCartItems(this.items);
  }

  loadStoreItems(): void {
    this.s.getStoreItems().subscribe((items) => {
      for (var i = 0; i < items.length; i++) {
        let item = items[i];
        var newId = item.id;
        this.items.push({title:item.title, id: +newId});
        switch(items[i].category) { // can see this being a dynamic add, but more to do with classes
          case "flower":
            this.flowerItems.push(item);
            continue;
          case "package":
            this.packageItems.push(item);
            continue;
          case "extra":
            this.extraItems.push(item);
            continue;
          case "vase":
            this.vaseItems.push(item);
            continue;
          default:
            this.otherItems.push(item);
        }
      }
    });
  }

  addItemCookie(id:string, quantity:number) {
    let item:CartItem = {id:id,quantity:quantity};
    this.c.addItemCookie(item);
    var i = this.itemIndexInCart(id);
    if (i==-1) {
      this.cartItems.push(item);
      console.log("Deosn't existss");
    } else {
      this.cartItems[i].quantity+=quantity;
    }
  }

  itemIndexInCart(id:string) {
    for(var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id == id) return i;
    }
    return -1;
  }

  deleteItem(id:string) {
    this.c.removeItemFromCookie(id);
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
