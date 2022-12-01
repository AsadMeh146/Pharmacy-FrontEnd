import { TestBed } from '@angular/core/testing';

import { AddPharmacyDetailsService } from './add-pharmacy-details.service';

describe('AddPharmacyDetailsService', () => {
  let service: AddPharmacyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPharmacyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
