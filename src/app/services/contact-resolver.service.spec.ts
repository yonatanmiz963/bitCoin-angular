import { TestBed } from '@angular/core/testing';

import { ContactResolverService } from './contact-resolver.service';

describe('Pet.ResolverService', () => {
  let service: ContactResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
