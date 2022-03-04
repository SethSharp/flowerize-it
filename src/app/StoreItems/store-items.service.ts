import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { StoreItem } from './store-item';
import { STOREITEMS } from './store-items';

@Injectable({
  providedIn: 'root',
})
export class StoreItemsService {
  constructor() {}

  getStoreItems(): Observable<StoreItem[]> {
    return of(STOREITEMS);
  }
}
