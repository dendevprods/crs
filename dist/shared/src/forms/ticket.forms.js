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
    convertAssignEmployeesFormToDto: function() {
        return convertAssignEmployeesFormToDto;
    },
    convertTicketFormToDto: function() {
        return convertTicketFormToDto;
    },
    convertUpdateTicketStatusFormToDto: function() {
        return convertUpdateTicketStatusFormToDto;
    },
    getDefaultAssignEmployeesForm: function() {
        return getDefaultAssignEmployeesForm;
    },
    getDefaultTicketForm: function() {
        return getDefaultTicketForm;
    },
    getDefaultUpdateTicketStatusForm: function() {
        return getDefaultUpdateTicketStatusForm;
    }
});
const _prisma = require("generated/prisma");
const toDateStringSafe = (value)=>{
    const date = new Date(value || '');
    if (isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
const getDefaultTicketForm = ()=>({
        equipmentDescription: '',
        imageUrl: '',
        priority: _prisma.OrderPriority.NORMAL,
        client: null,
        representative: null,
        status: _prisma.OrderStatus.NEW,
        estimatedCost: 0,
        estimatedDeliveryDate: null,
        estimatedExecutionTime: 0,
        observations: '',
        employees: []
    });
const getDefaultUpdateTicketStatusForm = ()=>({
        status: _prisma.OrderStatus.NEW
    });
const getDefaultAssignEmployeesForm = ()=>({
        employees: []
    });
const convertTicketFormToDto = (form)=>{
    var _form_representative, _form_representative1;
    return {
        equipmentDescription: form.equipmentDescription,
        imageUrl: form.imageUrl || null,
        priority: form.priority,
        clientId: form.client.id,
        personRepresentativeId: ((_form_representative = form.representative) == null ? void 0 : _form_representative.personId) || null,
        companyRepresentativeId: ((_form_representative1 = form.representative) == null ? void 0 : _form_representative1.companyId) || null,
        status: form.status,
        estimatedCost: form.estimatedCost || null,
        estimatedDeliveryDate: toDateStringSafe(form.estimatedDeliveryDate),
        estimatedExecutionTime: form.estimatedExecutionTime || null,
        observations: form.observations || null,
        employeeIds: form.employees.map((e)=>e.id)
    };
};
const convertUpdateTicketStatusFormToDto = (form)=>({
        status: form.status
    });
const convertAssignEmployeesFormToDto = (form)=>({
        employeeIds: form.employees.map((e)=>e.id)
    });

//# sourceMappingURL=ticket.forms.js.map