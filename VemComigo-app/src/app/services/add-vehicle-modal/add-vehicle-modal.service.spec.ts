import { TestBed } from '@angular/core/testing';

import { AddVehicleModalService } from './add-vehicle-modal.service';

describe('AddVehicleModalService', () => {
  let service: AddVehicleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVehicleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
