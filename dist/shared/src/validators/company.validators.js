"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateCompanyForm", {
    enumerable: true,
    get: function() {
        return validateCompanyForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const _personvalidators = require("./person.validators");
const validateCompanyForm = (form)=>{
    const errors = {
        representatives: null
    };
    errors.name = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Company name is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Company name must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 100),
            message: 'Company name must be less than 100 characters'
        }
    ])(form.name);
    errors.taxId = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.taxId(v),
            message: 'Please enter a valid tax ID'
        }
    ])(form.taxId);
    errors.headquarters = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 5),
            message: 'Headquarters address must be at least 5 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 200),
            message: 'Headquarters address must be less than 200 characters'
        }
    ])(form.headquarters);
    errors.email = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.email(v),
            message: 'Please enter a valid email address'
        }
    ])(form.email);
    errors.phone = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.phone(v),
            message: 'Please enter a valid phone number'
        }
    ])(form.phone);
    errors.representatives = (0, _personvalidators.validateRepresentatives)(form.representatives);
    return errors;
};

//# sourceMappingURL=company.validators.js.map