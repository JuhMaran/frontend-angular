import { TestBed } from '@angular/core/testing';

import { ContainerMeasureService } from './container-measure.service';

describe('ContainerMeasureService', () => {
  let service: ContainerMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
