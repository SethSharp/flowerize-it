import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SharedService } from '../SharedService/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DbCommunicationService } from '../services/db-communication.service';

@Component({
  selector: 'app-add-item',
  template: `
    <style>
      button {
        border-radius: 20px;
        background-color: black;
        color: white;
        border: 1px black;
      }
      .shopping-cart {
        width: 1.5rem;
        height: 1.5rem;
      }
      input {
        width: 2rem;
        text-align: center;
      }
      .quantity {
        margin-bottom: 5px;
      }
      nav {
        padding: 4px;
      }
      nav button {
        width: 3rem;
        height: 2rem;
      }
      ::ng-deep.snack-bar {
        color: black;
        background-color: grey;
        text-align: center !important;
      }
    </style>
    <nav>
      <button (click)="decQ()"><</button>
      <input
        class="quantity"
        matInput
        placeholder="Quantity"
        value="{{ quantity }}"
      />
      <button (click)="incQ()">></button>
    </nav>

    <button (click)="addToCart(id, quantity)" mat-button>
      <img
        class="shopping-cart"
        src="../assets/images/add_shopping_cart_white_24dp.svg"
      />
    </button>
  `,
})
export class AddItemComponent implements OnInit {
  @Input() id: any;
  constructor(
    private s: SharedService,
    private snack: MatSnackBar,
    private dbCom: DbCommunicationService
  ) {}
  ngOnInit(): void {}

  quantity = 0;

  addToCart(ID: string, quantity: number) {
    // going to retrieve the ID of the product to add to cart, add quantity as well
    // Add item to cookie
    // Use cart service to do this
    if (quantity == 0) return;
    this.dbCom.addToCart(ID.toString()).subscribe(item => {
      this.s.addItemCookie(ID.toString(), quantity);
      this.quantity = 0;
      this.snack.open('Item successfully added to cart', '', {
        duration: 3000,
        panelClass: 'snack-bar',
      });
    })


  }
  decQ() {
    if (this.quantity == 0) return;
    this.quantity -= 1;
  }
  incQ() {
    this.quantity += 1;
  }
}
