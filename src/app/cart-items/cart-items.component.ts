import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  @Input() items:any;
  constructor() { }

  ngOnInit(): void {
  }

}
