import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersPageComponent } from './customers-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { CustomerService } from 'src/app/services/customer.service';
import { Mock } from 'moq.ts';
import { of } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CustomersPageComponent', () => {
  let component: CustomersPageComponent;
  let fixture: ComponentFixture<CustomersPageComponent>;
  let mockCustomerService = new Mock<CustomerService>();
  mockCustomerService.setup(m => m.listAll())
    .returns(of([]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersPageComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
      providers: [
        { provide: CustomerService, useValue: mockCustomerService.object() },
      ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
      ]
    });
    fixture = TestBed.createComponent(CustomersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
