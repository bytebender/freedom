import { TestBed } from '@angular/core/testing';
import { Provider } from "@angular/core";

import { CustomerService } from './customer.service';
import { Firestore } from '@angular/fire/firestore';
import { Mock } from 'moq.ts';

describe('CustomerService', () => {
  let service: CustomerService;
  let mockFireStore = new Mock<Firestore>();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Firestore, useValue: mockFireStore.object() } as Provider
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
