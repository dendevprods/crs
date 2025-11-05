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
    ValidationRules: function() {
        return ValidationRules;
    },
    createValidator: function() {
        return createValidator;
    },
    isFormValid: function() {
        return isFormValid;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _validator = /*#__PURE__*/ _interop_require_default._(require("validator"));
const ValidationRules = {
    required: (value)=>!_validator.default.isEmpty((value == null ? void 0 : value.trim()) || ''),
    minLength: (value, min)=>_validator.default.isLength((value == null ? void 0 : value.trim()) || '', {
            min
        }),
    maxLength: (value, max)=>_validator.default.isLength((value == null ? void 0 : value.trim()) || '', {
            max
        }),
    exactLength: (value, length)=>_validator.default.isLength((value == null ? void 0 : value.trim()) || '', {
            min: length,
            max: length
        }),
    email: (value)=>_validator.default.isEmail((value == null ? void 0 : value.trim()) || ''),
    phone: (value)=>_validator.default.isMobilePhone((value == null ? void 0 : value.trim()) || '', 'any'),
    url: (value)=>_validator.default.isURL((value == null ? void 0 : value.trim()) || ''),
    taxId: (value)=>/^[A-Z0-9]{8,15}$/i.test((value == null ? void 0 : value.trim()) || ''),
    date: (value)=>{
        if (!value) return true;
        const d = new Date(value);
        return !isNaN(d.getTime());
    },
    decimal: (value)=>{
        if (value === null || value === undefined) return false;
        return _validator.default.isDecimal(String(value).trim());
    }
};
const createValidator = (rules)=>{
    return (value)=>{
        for (const rule of rules){
            if (!rule.check(value)) {
                return typeof rule.message === 'string' ? rule.message : rule.message(value);
            }
        }
        return null;
    };
};
const isFormValid = (errors)=>{
    const isErrorValueValid = (value)=>{
        if (value === null) return true;
        if (Array.isArray(value)) {
            return value.every(isErrorValueValid);
        }
        if (typeof value === 'object' && value !== null) {
            return Object.values(value).every(isErrorValueValid);
        }
        return false;
    };
    return Object.values(errors).every(isErrorValueValid);
};

//# sourceMappingURL=validation.utils.js.map