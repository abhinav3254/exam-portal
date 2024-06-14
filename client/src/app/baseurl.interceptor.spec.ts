import { TestBed } from '@angular/core/testing';

import { BaseurlInterceptor } from './baseurl.interceptor';

describe('BaseurlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseurlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BaseurlInterceptor = TestBed.inject(BaseurlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
