"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "validateClientForm", {
    enumerable: true,
    get: function() {
        return validateClientForm;
    }
});
const _prisma = require("generated/prisma");
const _personvalidators = require("./person.validators");
const _companyvalidators = require("./company.validators");
const validateClientForm = (form)=>{
    if (form.type === _prisma.ClientType.PERSON) {
        return (0, _personvalidators.validatePersonForm)(form.data);
    } else {
        return (0, _companyvalidators.validateCompanyForm)(form.data);
    }
};

//# sourceMappingURL=client.validators.js.map