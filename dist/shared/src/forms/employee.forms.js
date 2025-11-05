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
    convertEmployeeFormToDto: function() {
        return convertEmployeeFormToDto;
    },
    getDefaultEmployeeForm: function() {
        return getDefaultEmployeeForm;
    }
});
const getDefaultEmployeeForm = ()=>({
        fullName: '',
        phone: '',
        email: '',
        department: null,
        role: null
    });
const convertEmployeeFormToDto = (form)=>{
    var _form_department, _form_role;
    return {
        fullName: form.fullName.trim(),
        phone: form.phone.trim() || null,
        email: form.email.trim() || null,
        departmentId: ((_form_department = form.department) == null ? void 0 : _form_department.id) || null,
        roleId: ((_form_role = form.role) == null ? void 0 : _form_role.id) || null
    };
};

//# sourceMappingURL=employee.forms.js.map