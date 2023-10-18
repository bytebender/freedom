import { Address } from "./address";

export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    middleInitial: string | undefined;
    company: string | undefined;
    jobTitle: string | undefined;
    emails: {email: string, label: string}[] = [];
    phones: {phone: string, label: string}[] = [];
    addresses: {address: Address, label: string}[] = [];
}