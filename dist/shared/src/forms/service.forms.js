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
    convertServiceFormToDto: function() {
        return convertServiceFormToDto;
    },
    getDefaultServiceForm: function() {
        return getDefaultServiceForm;
    }
});
const getDefaultServiceForm = ()=>({
        serviceCode: '',
        name: '',
        description: '',
        price: 0.0,
        duration: 0,
        observations: ''
    });
const convertServiceFormToDto = (form)=>({
        serviceCode: form.serviceCode.trim() || null,
        name: form.name.trim(),
        description: form.description.trim() || null,
        price: form.price,
        duration: form.duration || null,
        observations: form.observations.trim() || null
    });

//# sourceMappingURL=service.forms.js.map