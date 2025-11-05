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
    convertClientFormToDto: function() {
        return convertClientFormToDto;
    },
    getDefaultClientForm: function() {
        return getDefaultClientForm;
    }
});
const _prisma = require("generated/prisma");
const _personforms = require("./person.forms");
const _companyforms = require("./company.forms");
const getDefaultClientForm = (type)=>type === 'PERSON' ? {
        type: _prisma.ClientType.PERSON,
        data: (0, _personforms.getDefaultPersonForm)()
    } : {
        type: _prisma.ClientType.COMPANY,
        data: (0, _companyforms.getDefaultCompanyForm)()
    };
const convertClientFormToDto = (form)=>{
    if (form.type === _prisma.ClientType.PERSON) {
        return {
            type: _prisma.ClientType.PERSON,
            data: (0, _personforms.convertPersonFormToDto)(form.data)
        };
    } else {
        return {
            type: _prisma.ClientType.COMPANY,
            data: (0, _companyforms.convertCompanyFormToDto)(form.data)
        };
    }
};

//# sourceMappingURL=client.forms.js.map