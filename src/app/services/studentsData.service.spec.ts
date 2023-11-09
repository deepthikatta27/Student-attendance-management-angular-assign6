import { TestBed } from '@angular/core/testing';

import { StudentsDataService } from './studentsData.service';

describe('StudentsService', () => {
  let service: StudentsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
