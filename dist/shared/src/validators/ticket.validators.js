"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateTicketForm", {
    enumerable: true,
    get: function() {
        return validateTicketForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateTicketForm = (form)=>{
    const errors = {};
    errors.equipmentDescription = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Equipment description is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 5),
            message: 'Equipment description must be at least 5 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 500),
            message: 'Equipment description must be less than 500 characters'
        }
    ])(form.equipmentDescription);
    errors.imageUrl = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.url(v),
            message: 'Please enter a valid URL'
        }
    ])(form.imageUrl);
    errors.client = (0, _validationutils.createValidator)([
        {
            check: (v)=>v && typeof v.id === 'number' && v.id > 0,
            message: 'Please select a client'
        }
    ])(form.client);
    errors.estimatedCost = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Estimated cost cannot be negative'
        }
    ])(form.estimatedCost);
    errors.estimatedDeliveryDate = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.date(v),
            message: (v)=>`Please enter a valid date. Current value: "${v}"`
        }
    ])(form.estimatedDeliveryDate);
    errors.estimatedExecutionTime = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Estimated execution time cannot be negative'
        }
    ])(form.estimatedExecutionTime);
    errors.observations = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 1000),
            message: 'Observations must be less than 1000 characters'
        }
    ])(form.observations);
    errors.priority = null;
    errors.status = null;
    errors.representative = null;
    errors.employees = null;
    return errors;
};

//# sourceMappingURL=ticket.validators.js.map