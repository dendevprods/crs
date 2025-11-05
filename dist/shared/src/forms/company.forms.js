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
    convertCompanyFormToDto: function() {
        return convertCompanyFormToDto;
    },
    getDefaultCompanyForm: function() {
        return getDefaultCompanyForm;
    }
});
const _personforms = require("./person.forms");
const getDefaultCompanyForm = ()=>({
        name: '',
        taxId: '',
        headquarters: '',
        phone: '',
        email: '',
        representatives: []
    });
const convertCompanyFormToDto = (form)=>({
        name: form.name.trim(),
        taxId: form.taxId.trim() || null,
        headquarters: form.headquarters.trim() || null,
        phone: form.phone.trim() || null,
        email: form.email.trim() || null,
        representatives: form.representatives.map(_personforms.convertRepresentativeFormToDto)
    });

//# sourceMappingURL=company.forms.js.map