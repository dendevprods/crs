"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateEmployeeForm", {
    enumerable: true,
    get: function() {
        return validateEmployeeForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateEmployeeForm = (form)=>{
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
    if (!form.email && !form.phone) {
        errors.email = errors.email || 'Either email or phone is required';
        errors.phone = errors.phone || 'Either phone or email is required';
    }
    errors.department = null;
    errors.role = null;
    return errors;
};

//# sourceMappingURL=employee.validators.js.map