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
    convertBulkTicketItemsFormToDto: function() {
        return convertBulkTicketItemsFormToDto;
    },
    convertTicketItemFormToDto: function() {
        return convertTicketItemFormToDto;
    },
    convertUpdateTicketItemFormToDto: function() {
        return convertUpdateTicketItemFormToDto;
    },
    getDefaultBulkTicketItemsForm: function() {
        return getDefaultBulkTicketItemsForm;
    },
    getDefaultTicketItemForm: function() {
        return getDefaultTicketItemForm;
    },
    getDefaultUpdateTicketItemForm: function() {
        return getDefaultUpdateTicketItemForm;
    }
});
const _prisma = require("generated/prisma");
const getDefaultTicketItemForm = ()=>({
        ticketId: 0,
        type: _prisma.ItemType.PRODUCT,
        productId: 0,
        serviceId: 0,
        quantity: 1
    });
const getDefaultUpdateTicketItemForm = ()=>({
        quantity: 1
    });
const getDefaultBulkTicketItemsForm = ()=>({
        ticketId: 0,
        items: []
    });
const convertTicketItemFormToDto = (form)=>({
        ticketId: form.ticketId,
        type: form.type,
        productId: form.productId || null,
        serviceId: form.serviceId || null,
        quantity: form.quantity
    });
const convertUpdateTicketItemFormToDto = (form)=>({
        quantity: form.quantity
    });
const convertBulkTicketItemsFormToDto = (form)=>({
        ticketId: form.ticketId,
        items: form.items.map(convertTicketItemFormToDto)
    });

//# sourceMappingURL=ticket-item.forms.js.map