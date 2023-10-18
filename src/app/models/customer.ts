import { Address } from "./address";
import { Auditable } from "./auditable";

export interface Customer extends Auditable {
    id?: string;
    firstName: string;
    lastName: string;
    middleInitial?: string;
    company?: string;
    jobTitle?: string;
    emails?: {email: string, label: string}[];
    phones?: {phone: string, label: string}[];
    addresses?: {address: Address, label: string}[];
}