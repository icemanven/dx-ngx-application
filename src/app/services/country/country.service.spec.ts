import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CountryService } from './country.service';

describe('CountryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [CountryService]
    });
  });

  it('should ...', inject([CountryService], (service: CountryService) => {
    expect(service).toBeTruthy();
  }));
});
