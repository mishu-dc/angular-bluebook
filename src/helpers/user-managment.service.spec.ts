import { TestBed, inject } from '@angular/core/testing';

import { UserManagmentService } from './user-managment.service';

describe('UserManagmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserManagmentService]
    });
  });

  it('should be created', inject([UserManagmentService], (service: UserManagmentService) => {
    expect(service).toBeTruthy();
  }));
});
