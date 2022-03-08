import { TestBed } from '@angular/core/testing';

import { StoreItemsService } from './store-items.service';

describe('StoreItemsService', () => {
  let service: StoreItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
