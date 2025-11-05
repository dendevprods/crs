"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateTaskForm", {
    enumerable: true,
    get: function() {
        return validateTaskForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const validateTaskForm = (form)=>{
    const errors = {};
    errors.ticketId = (0, _validationutils.createValidator)([
        {
            check: (v)=>v > 0,
            message: 'Ticket ID is required'
        }
    ])(form.ticketId);
    errors.title = (0, _validationutils.createValidator)([
        {
            check: (v)=>_validationutils.ValidationRules.required(v),
            message: 'Title is required'
        },
        {
            check: (v)=>_validationutils.ValidationRules.minLength(v, 2),
            message: 'Title must be at least 2 characters'
        },
        {
            check: (v)=>_validationutils.ValidationRules.maxLength(v, 200),
            message: 'Title must be less than 200 characters'
        }
    ])(form.title);
    errors.description = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.minLength(v, 5),
            message: 'Description must be at least 5 characters'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.maxLength(v, 1000),
            message: 'Description must be less than 1000 characters'
        }
    ])(form.description);
    errors.dueDate = (0, _validationutils.createValidator)([
        {
            check: (v)=>!v || _validationutils.ValidationRules.required(v),
            message: 'Due date is required'
        },
        {
            check: (v)=>!v || _validationutils.ValidationRules.date(v),
            message: 'Please enter a valid date'
        }
    ])(form.dueDate);
    errors.assignee = null;
    errors.status = null;
    return errors;
};

//# sourceMappingURL=task.validators.js.map