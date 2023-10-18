export interface Address {
    id: string;
    line1: string;
    line2: string | undefined;
    city: string;
    stateCode: string;
    zipCode: string;
}