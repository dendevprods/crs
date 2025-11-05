"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateServiceForm", {
    enumerable: true,
    get: function() {
        return validateServiceForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateServiceForm = (form)=>{
    const errors = {};
    errors.name = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Service name is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Service name must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 100),
            message: 'Service name must be less than 100 characters'
        }
    ])(form.name);
    errors.serviceCode = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.required(v),
            message: 'Service code is required'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 2),
            message: 'Service code must be at least 2 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 50),
            message: 'Service code must be less than 50 characters'
        }
    ])(form.serviceCode);
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
    errors.price = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Price cannot be negative'
        },
        {
            check: (v)=>_validationutils.ValidationRules.decimal(v),
            message: 'Please enter a valid price'
        }
    ])(form.price);
    errors.duration = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Duration cannot be negative'
        }
    ])(form.duration);
    errors.observations = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 1000),
            message: 'Observations must be less than 1000 characters'
        }
    ])(form.observations);
    return errors;
};

//# sourceMappingURL=service.validators.js.map