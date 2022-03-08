import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { StoreItem } from './store-item';
import { STOREITEMS } from './store-items';
import { DbCommunicationService } from '../DB/db-communication.service';

@Injectable({
  providedIn: 'root',
})
export class StoreItemsService {
  constructor(private db: DbCommunicationService) {}

  getItems(): Observable<StoreItem[]> {
    var tempItems:StoreItem[]=[]
    this.db.getAllItems().subscribe((data:any) => {
      for (var i = 0; i < data.length; i++) {
        var t: StoreItem = {
          id: data[i].id,
          title: data[i].title,
          description: data[i].description,
          quantity: data[i].quantity,
          price: data[i].price,
          image: data[i].image,
          category: data[i].category,
        };
        tempItems.push(t)
      }

    });
    return of(tempItems)
  }

  // getStoreItems(): Observable<StoreItem[]> {
  //   var newItems: StoreItem[]=[];
  //   this.getItems().subscribe((data: StoreItem[]) => {
  //     console.log(data)
  //     newItems =data
  //   });
  //   console.log("Or here")
  //   return of(newItems);
  // }
}
