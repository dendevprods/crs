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
    convertProductFormToDto: function() {
        return convertProductFormToDto;
    },
    getDefaultProductForm: function() {
        return getDefaultProductForm;
    }
});
const _prisma = require("generated/prisma");
const getDefaultProductForm = ()=>({
        productCode: '',
        name: '',
        description: '',
        category: '',
        quantity: 0,
        unitPrice: 0.0,
        entryDate: new Date().toISOString().split('T')[0],
        supplier: '',
        status: _prisma.ProductStatus.AVAILABLE,
        weight: 0.0,
        observations: '',
        serialNumber: ''
    });
const convertProductFormToDto = (form)=>({
        productCode: form.productCode.trim() || null,
        name: form.name.trim(),
        description: form.description.trim() || null,
        category: form.category.trim(),
        quantity: form.quantity || null,
        unitPrice: form.unitPrice || null,
        entryDate: form.entryDate.trim() ? new Date(form.entryDate) : new Date(),
        supplier: form.supplier.trim() || null,
        status: form.status,
        weight: form.weight || null,
        observations: form.observations.trim() || null,
        serialNumber: form.serialNumber.trim() || null
    });

//# sourceMappingURL=product.forms.js.map