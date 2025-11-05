import { ClientType } from 'generated/prisma';
import { PersonForm } from './person.forms';
import { CompanyForm } from './company.forms';
import { CreateClientDto } from '../types/dtos/client.dto';
export type ClientForm = {
    type: typeof ClientType.PERSON;
    data: PersonForm;
} | {
    type: typeof ClientType.COMPANY;
    data: CompanyForm;
};
export declare const getDefaultClientForm: (type: ClientType) => ClientForm;
export declare const convertClientFormToDto: (form: ClientForm) => CreateClientDto;
