import { Component, OnInit } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css'],
})
export class CustomersPageComponent implements OnInit {
  customer: any;
  customerList$?: Observable<Customer[]>;
  id = new FormControl('');

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.customerList$ = this.customerService.listAll();
  }

  removeCustomer() {
    if (this.id.value) {
      this.customerService.remove(this.id.value)
        .then(() => this.id.reset());
    }
  }

  addCustomer() {
    const toAdd = {
      company: 'bytebender apps',
      firstName: 'John',
      lastName: 'Leach',
      created: new Date(),
      jobTitle: 'owner',
    } as Customer;

    this.customerService.add(toAdd).then((res) => {
      this.customer = res;
    });
  }
}
