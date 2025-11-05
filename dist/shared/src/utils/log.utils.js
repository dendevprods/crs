"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getLogMessageKeys", {
    enumerable: true,
    get: function() {
        return getLogMessageKeys;
    }
});
const getLogMessageKeys = (action, entity, count)=>{
    if (typeof count === "number" && count > 1) {
        // Plural form
        return {
            translationKey: "log.messages.multiple",
            params: {
                action,
                entityPlural: entity,
                count
            }
        };
    } else {
        // Singular form
        return {
            translationKey: "log.messages.single",
            params: {
                action,
                entitySingular: entity,
                count: undefined
            }
        };
    }
};

//# sourceMappingURL=log.utils.js.map