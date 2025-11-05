import { FormErrors } from 'shared/errors/validation.error';
export declare const ValidationRules: {
    required: (value: string) => boolean;
    minLength: (value: string, min: number) => boolean;
    maxLength: (value: string, max: number) => boolean;
    exactLength: (value: string, length: number) => boolean;
    email: (value: string) => boolean;
    phone: (value: string) => boolean;
    url: (value: string) => boolean;
    taxId: (value: string) => boolean;
    date: (value: string) => boolean;
    decimal: (value: any) => boolean;
};
export declare const createValidator: (rules: Array<{
    check: (value: any) => boolean;
    message: string | ((value: any) => string);
}>) => (value: any) => string | null;
export declare const isFormValid: (errors: FormErrors<any>) => boolean;
