/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HnApiService } from './hn-api.service';

describe('Service: HnApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnApiService]
    });
  });

  it('should ...', inject([HnApiService], (service: HnApiService) => {
    expect(service).toBeTruthy();
  }));
});
