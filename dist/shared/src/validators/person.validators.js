"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    validatePersonForm: function() {
        return validatePersonForm;
    },
    validateRepresentativeForm: function() {
        return validateRepresentativeForm;
    },
    validateRepresentatives: function() {
        return validateRepresentatives;
    }
});
const _extends = require("@swc/helpers/_/_extends");
const _validationutils = require("../utils/validation.utils");
const validatePersonForm = (form)=>{
    const errors = {};
    errors.fullName = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Full name is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Full name must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 100),
            message: 'Full name must be less than 100 characters'
        }
    ])(form.fullName);
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
    errors.address = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 5),
            message: 'Address must be at least 5 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 200),
            message: 'Address must be less than 200 characters'
        }
    ])(form.address);
    if (!form.email && !form.phone) {
        errors.email = errors.email || 'Either email or phone is required';
        errors.phone = errors.phone || 'Either phone or email is required';
    }
    return errors;
};
const validateRepresentativeForm = (form)=>{
    const personErrors = validatePersonForm(form);
    const errors = _extends._({}, personErrors, {
        personId: null
    });
    return errors;
};
const validateRepresentatives = (representatives)=>{
    if (!representatives || representatives.length === 0) {
        return null;
    }
    return representatives.map((rep)=>validateRepresentativeForm(rep));
};

//# sourceMappingURL=person.validators.js.map