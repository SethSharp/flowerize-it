import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input() shoes: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.shoes);
  }

  customTB(index:number, item:any) {
    return item;
  }
}
