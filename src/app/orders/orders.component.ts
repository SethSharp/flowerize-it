import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Order/Order';
import { SharedService } from '../services/Shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { SendOrderComponent } from './send-order/send-order.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  verified = true;
  orders: Order[] = [];
  search = '';
  status='';
  constructor(
    private router: Router,
    private s: SharedService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    // have some verification service, which will check an observable if the user is logged in
    // bsaed on condiitons, it will eithe rload the page, or not
    if (this.verified == false) {
      this.router.navigateByUrl('/access-denied');
    }
    this.orders = this.s.loadOrders();
  }

  addOrderToWord() {
    // Going to add the order to a word document, this will allow multiple orders to be placed into
    // a single document, then they can be cut out....
    // iuf they dont need to be cut out then this can be turned into a delete function
    // Which will give option to add a tracking number then it will send a email to the user
    // with this info and saying they your package is on the way, heres the code.
    // Need to display a order id: number of orders in total, so first order is id:1
  }

  printOrder(order:any) { // can export to word, then she prints...
    // title is orderID
    // have multiple orders in the single document, 2 per page
  }

  sendOrder(order:any) {
    // function to send emial to the user, order.email
    // then move the order
    const d = this.dialogRef.open(SendOrderComponent);
  }
}
