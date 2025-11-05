import { Person } from 'generated/prisma';
import { ClientForm } from '../forms/client.forms';
import { CompanyFormErrors } from './company.validators';
import { FormErrors } from '../errors/validation.error';
export declare const validateClientForm: (form: ClientForm) => FormErrors<Person> | CompanyFormErrors;
