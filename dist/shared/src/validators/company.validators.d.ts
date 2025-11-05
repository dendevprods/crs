import { PersonForm } from 'shared/forms/person.forms';
import { FormErrors } from '../errors/validation.error';
import { CompanyForm } from '../forms/company.forms';
export type CompanyFormErrors = FormErrors<Omit<CompanyForm, 'representatives'>> & {
    representatives: Array<FormErrors<PersonForm>> | null;
};
export declare const validateCompanyForm: (form: CompanyForm) => CompanyFormErrors;
