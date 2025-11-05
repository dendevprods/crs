"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateDepartmentForm", {
    enumerable: true,
    get: function() {
        return validateDepartmentForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateDepartmentForm = (form)=>{
    const errors = {};
    errors.name = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Department name is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Department name must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 50),
            message: 'Department name must be less than 50 characters'
        }
    ])(form.name);
    errors.description = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 5),
            message: 'Description must be at least 5 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 500),
            message: 'Description must be less than 500 characters'
        }
    ])(form.description);
    errors.employees = null;
    return errors;
};

//# sourceMappingURL=department.validators.js.map