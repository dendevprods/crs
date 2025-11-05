import { CreatePersonDto, RepresentativeDto } from "../types/dtos/person.dto";
export type PersonForm = {
    fullName: string;
    phone: string;
    email: string;
    address: string;
};
export type RepresentativeForm = PersonForm & {
    personId: number;
};
export declare const getDefaultPersonForm: () => PersonForm;
export declare const getDefaultRepresentativeForm: () => RepresentativeForm;
export declare const convertPersonFormToDto: (form: PersonForm) => CreatePersonDto;
export declare const convertRepresentativeFormToDto: (form: RepresentativeForm) => RepresentativeDto;
