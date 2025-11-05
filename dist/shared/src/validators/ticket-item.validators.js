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
    validateBulkTicketItemsForm: function() {
        return validateBulkTicketItemsForm;
    },
    validateTicketItemForm: function() {
        return validateTicketItemForm;
    },
    validateUpdateTicketItemForm: function() {
        return validateUpdateTicketItemForm;
    }
});
const _validationutils = require("../utils/validation.utils");
const _prisma = require("generated/prisma");
const validateTicketItemForm = (form)=>{
    const errors = {};
    errors.ticketId = (0, _validationutils.createValidator)([
        {
            check: (v)=>v > 0,
            message: 'Ticket ID is required'
        }
    ])(form.ticketId);
    errors.quantity = (0, _validationutils.createValidator)([
        {
            check: (v)=>v > 0,
            message: 'Quantity must be greater than 0'
        },
        {
            check: (v)=>v <= 1000,
            message: 'Quantity must be less than 1000'
        }
    ])(form.quantity);
    if (form.type === _prisma.ItemType.PRODUCT) {
        errors.productId = (0, _validationutils.createValidator)([
            {
                check: (v)=>v > 0,
                message: 'Please select a product'
            }
        ])(form.productId);
        errors.serviceId = null;
    } else {
        errors.serviceId = (0, _validationutils.createValidator)([
            {
                check: (v)=>v > 0,
                message: 'Please select a service'
            }
        ])(form.serviceId);
        errors.productId = null;
    }
    errors.type = null;
    return errors;
};
const validateUpdateTicketItemForm = (form)=>{
    const errors = {};
    errors.quantity = (0, _validationutils.createValidator)([
        {
            check: (v)=>v > 0,
            message: 'Quantity must be greater than 0'
        },
        {
            check: (v)=>v <= 1000,
            message: 'Quantity must be less than 1000'
        }
    ])(form.quantity);
    return errors;
};
const validateBulkTicketItemsForm = (form)=>{
    const errors = {};
    errors.ticketId = (0, _validationutils.createValidator)([
        {
            check: (v)=>v > 0,
            message: 'Ticket ID is required'
        }
    ])(form.ticketId);
    errors.items = (0, _validationutils.createValidator)([
        {
            check: (v)=>form.items.length > 0,
            message: 'At least one item must be added'
        }
    ])(form.items);
    return errors;
};

//# sourceMappingURL=ticket-item.validators.js.map