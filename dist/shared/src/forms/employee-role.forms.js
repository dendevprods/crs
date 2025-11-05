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
    convertEmployeeRoleFormToDto: function() {
        return convertEmployeeRoleFormToDto;
    },
    getDefaultEmployeeRoleForm: function() {
        return getDefaultEmployeeRoleForm;
    }
});
const getDefaultEmployeeRoleForm = ()=>({
        name: '',
        description: '',
        employees: []
    });
const convertEmployeeRoleFormToDto = (form)=>({
        name: form.name.trim(),
        description: form.description.trim() || null,
        employeeIds: form.employees.map((e)=>e.id)
    });

//# sourceMappingURL=employee-role.forms.js.map