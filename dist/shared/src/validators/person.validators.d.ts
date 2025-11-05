import { FormErrors } from '../errors/validation.error';
import { PersonForm, RepresentativeForm } from '../forms/person.forms';
export declare const validatePersonForm: (form: PersonForm) => FormErrors<PersonForm>;
export declare const validateRepresentativeForm: (form: RepresentativeForm) => FormErrors<RepresentativeForm>;
export declare const validateRepresentatives: (representatives: RepresentativeForm[]) => Array<FormErrors<PersonForm>> | null;
