import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/Shared/shared.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  // Will become na observable,
  shoes: any;
  selectedValue = 'option1';
  constructor(private sharedServ: SharedService) {}

  ngOnInit(): void {
    this.shoes = this.sharedServ.getAllItems();
  }

  changeStoreItems(cat: string) {
    switch (
      cat // can see this being a dynamic add, but more to do with classes
      // case "shoes":
      //   this.shoes = this.s.getStoreItems();
      //   break;
      // case "packages":
      //   this.shoes = this.s.getPackageItems();
      //   break;
      // case "extras":
      //   this.shoes = this.s.getExtraItems();
      //   break;
      // case "vases":
      //   this.shoes = this.s.getVaseItems();
      //   break;
      // default:
      //   this.shoes = this.s.getOtherItems();
    ) {
    }
  }
}
