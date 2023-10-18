import { Auditable } from "./auditable";

export interface Address extends Auditable {
    id: string;
    line1: string;
    line2: string | undefined;
    city: string;
    stateCode: string;
    zipCode: string;
}