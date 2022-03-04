import { CartItem } from './../CartItems/cart-item';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../SharedService/shared.service';

@Component({
  selector: 'app-full-cart',
  templateUrl: './full-cart.component.html',
  styleUrls: ['./full-cart.component.scss']
})
export class FullCartComponent implements OnInit {

  cartItems:CartItem[] = [];

  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.cartItems = this.shared.getCartItems();
    console.log(this.cartItems)
  }
  deleteItem(id:string, i:number) {
    this.shared.deleteItem(id);
    this.cartItems.splice(i,1);
  }
}
