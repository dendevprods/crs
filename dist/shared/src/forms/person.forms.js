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
    convertPersonFormToDto: function() {
        return convertPersonFormToDto;
    },
    convertRepresentativeFormToDto: function() {
        return convertRepresentativeFormToDto;
    },
    getDefaultPersonForm: function() {
        return getDefaultPersonForm;
    },
    getDefaultRepresentativeForm: function() {
        return getDefaultRepresentativeForm;
    }
});
const _extends = require("@swc/helpers/_/_extends");
const getDefaultPersonForm = ()=>({
        fullName: '',
        phone: '',
        email: '',
        address: ''
    });
const getDefaultRepresentativeForm = ()=>_extends._({}, getDefaultPersonForm(), {
        personId: 0
    });
const convertPersonFormToDto = (form)=>({
        fullName: form.fullName.trim(),
        phone: form.phone.trim() || null,
        email: form.email.trim() || null,
        address: form.address.trim() || null
    });
const convertRepresentativeFormToDto = (form)=>_extends._({}, convertPersonFormToDto(form), {
        personId: form.personId || null
    });

//# sourceMappingURL=person.forms.js.map