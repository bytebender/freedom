import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private COLLECTION_CUSTOMER: string = 'customers';

  constructor(
    private firestore: Firestore
  ) {}

  async add(customer: Customer) {
    const ref = collection(this.firestore, this.COLLECTION_CUSTOMER);

    return addDoc(ref, customer);
  }

  listAll(): Observable<Customer[]> {
    const ref = collection(this.firestore, this.COLLECTION_CUSTOMER);

    return collectionData(ref, { idField: 'id'}) as Observable<Customer[]>;
  }

  async remove(id: string) {

    if (!id) {
      
    }

    const ref = doc(this.firestore, this.COLLECTION_CUSTOMER + '/' + id);

    return deleteDoc(ref);
  }
}
