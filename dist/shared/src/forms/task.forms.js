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
    convertTaskFormToDto: function() {
        return convertTaskFormToDto;
    },
    getDefaultTaskForm: function() {
        return getDefaultTaskForm;
    }
});
const _prisma = require("generated/prisma");
const getDefaultTaskForm = ()=>({
        ticketId: 0,
        title: '',
        description: '',
        status: _prisma.TaskStatus.TODO,
        dueDate: null,
        assignee: null
    });
const convertTaskFormToDto = (form)=>({
        ticketId: form.ticketId,
        title: form.title,
        description: form.description || null,
        status: form.status,
        dueDate: form.dueDate,
        assigneeId: form.assignee ? form.assignee.id : null
    });

//# sourceMappingURL=task.forms.js.map