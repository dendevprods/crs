"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateProductForm", {
    enumerable: true,
    get: function() {
        return validateProductForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateProductForm = (form)=>{
    const errors = {};
    errors.name = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Product name is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Product name must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 100),
            message: 'Product name must be less than 100 characters'
        }
    ])(form.name);
    errors.productCode = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.required(v),
            message: 'Product code is required'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 2),
            message: 'Product code must be at least 2 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 50),
            message: 'Product code must be less than 50 characters'
        }
    ])(form.productCode);
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
    errors.category = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Category is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Category must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 50),
            message: 'Category must be less than 50 characters'
        }
    ])(form.category);
    errors.quantity = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Quantity cannot be negative'
        }
    ])(form.quantity);
    errors.unitPrice = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Unit price cannot be negative'
        },
        {
            check: (v)=>_validationutils.ValidationRules.decimal(v),
            message: 'Please enter a valid price'
        }
    ])(form.unitPrice);
    errors.entryDate = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Entry date is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.date(v),
            message: 'Please enter a valid date'
        }
    ])(form.entryDate);
    errors.supplier = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 2),
            message: 'Supplier name must be at least 2 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 100),
            message: 'Supplier name must be less than 100 characters'
        }
    ])(form.supplier);
    errors.weight = (0, _validationutils.createValidator)([
        {
            check: (v)=>v >= 0,
            message: 'Weight cannot be negative'
        },
        {
            check: (v)=>_validationutils.ValidationRules.decimal(v),
            message: 'Please enter a valid weight'
        }
    ])(form.weight);
    errors.observations = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 1000),
            message: 'Observations must be less than 1000 characters'
        }
    ])(form.observations);
    errors.serialNumber = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 2),
            message: 'Serial number must be at least 2 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 50),
            message: 'Serial number must be less than 50 characters'
        }
    ])(form.serialNumber);
    errors.status = null;
    return errors;
};

//# sourceMappingURL=product.validators.js.map