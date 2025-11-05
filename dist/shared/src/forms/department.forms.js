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
    convertDepartmentFormToDto: function() {
        return convertDepartmentFormToDto;
    },
    getDefaultDepartmentForm: function() {
        return getDefaultDepartmentForm;
    }
});
const getDefaultDepartmentForm = ()=>({
        name: '',
        description: '',
        employees: []
    });
const convertDepartmentFormToDto = (form)=>({
        name: form.name.trim(),
        description: form.description.trim() || null,
        employeeIds: form.employees.map((e)=>e.id)
    });

//# sourceMappingURL=department.forms.js.map