import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  template: `
    <style>
      .options {
        margin-left: 13.5%;
        width: 75%;
        text-align: center;
      }
      .options button {
        background-color: black;
        color: white;
        margin: 2%;
      }
    </style>
    <app-full-cart></app-full-cart>

    <div class="options">
      <button mat-button (click)="continueShopping()">Continue Shopping</button>
      <button mat-button (click)="checkout()">Checkout</button>
    </div>
  `,
})
export class CartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  continueShopping() {
    this.router.navigate(['store']);
  }

  checkout() {
    // navigate to the payment page
    this.router.navigate(['checkout']);
  }
}
