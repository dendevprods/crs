import { RepresentativeDto } from './person.dto';
export interface CreateCompanyDto {
    name: string;
    taxId?: string | null;
    headquarters?: string | null;
    phone?: string | null;
    email?: string | null;
    representatives: RepresentativeDto[];
}
export type UpdateCompanyDto = Partial<CreateCompanyDto>;
