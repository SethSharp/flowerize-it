import { StoreItem } from './../StoreItems/store-item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../SharedService/shared.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  verified = true;
  search="";
  items: StoreItem[] = [];
  constructor(private router: Router, private s:SharedService) {}

  ngOnInit(): void {
    // have some verification service, which will check an observable if the user is logged in
    // bsaed on condiitons, it will eithe rload the page, or not
    if (this.verified == false) {
      this.router.navigateByUrl('/access-denied');
    }
    this.items = this.s.loadAllItems();
  }

  saveItem(item:StoreItem) {}
  removeFromStore(item:StoreItem){}
  deleteFromStore(item:StoreItem){}
}
