import { CreatePersonDto } from './person.dto';
import { CreateCompanyDto } from './company.dto';
import { ClientType } from 'generated/prisma';
export interface PersonClientDto {
    type: typeof ClientType.PERSON;
    person: CreatePersonDto;
}
export interface CompanyClientDto {
    type: typeof ClientType.COMPANY;
    company: CreateCompanyDto;
}
export type CreateClientDto = {
    type: ClientType;
    data: CreatePersonDto | CreateCompanyDto;
};
export type UpdateClientDto = CreateClientDto;
