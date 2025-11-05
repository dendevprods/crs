import { CreateCompanyDto } from "../types/dtos/company.dto";
import { RepresentativeForm } from "./person.forms";
export type CompanyForm = {
    name: string;
    taxId: string;
    headquarters: string;
    phone: string;
    email: string;
    representatives: RepresentativeForm[];
};
export declare const getDefaultCompanyForm: () => CompanyForm;
export declare const convertCompanyFormToDto: (form: CompanyForm) => CreateCompanyDto;
