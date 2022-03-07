import { TestBed } from '@angular/core/testing';

import { DbCommunicationService } from './db-communication.service';

describe('DbCommunicationService', () => {
  let service: DbCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
