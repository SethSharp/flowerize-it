
import { StoreItem } from '../services/StoreItem/store-item';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/Shared/shared.service';
import { DbCommunicationService } from '../services/DB/db-communication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    private sharedServ: SharedService,
    private dbCom: DbCommunicationService
  ) {}

  verified = true;
  search = '';
  items: any[] = [];
  newItem = {
    title: 's',
    description: 's',
    quantity: 10,
    price: 10,
    image: 's',
    category: 's',
  };

  url = '';
  uploadedImage: any;

  ngOnInit(): void {
    // have some verification service, which will check an observable if the user is logged in
    // bsaed on condiitons, it will eithe rload the page, or not
    if (this.verified == false) {
      this.router.navigateByUrl('/access-denied');
      return;
    }
    this.items = this.sharedServ.getAllItems();
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      var reader = new FileReader(); //read the file
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.newItem.image = event.target.result;
      };
    }
  }

  createItem() {
    this.dbCom.saveItem(this.newItem).subscribe((item) => {
      console.log('Saved item');
    });
  }

  testing() {
    this.dbCom.getAllItems().subscribe((items:any) => {
      console.log(items);
      this.url = items[0].image;
    })
  }

  saveItem(item: StoreItem) {}
  removeFromStore(item: StoreItem) {}
  deleteFromStore(item: StoreItem) {}
}
