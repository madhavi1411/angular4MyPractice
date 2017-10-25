import { TestBed, inject } from '@angular/core/testing';

import { SaveAlertGaurdService } from './save-alert-gaurd.service';

describe('SaveAlertGaurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveAlertGaurdService]
    });
  });

  it('should be created', inject([SaveAlertGaurdService], (service: SaveAlertGaurdService) => {
    expect(service).toBeTruthy();
  }));
});
