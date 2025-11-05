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
    isExpandedEmployeeBase: function() {
        return isExpandedEmployeeBase;
    },
    isExpandedEmployeeWithTickets: function() {
        return isExpandedEmployeeWithTickets;
    }
});
function isExpandedEmployeeBase(emp) {
    return !!(emp && 'role' in emp && 'department' in emp);
}
function isExpandedEmployeeWithTickets(emp) {
    return !!(emp && 'tickets' in emp && Array.isArray(emp.tickets));
}

//# sourceMappingURL=employee.guard.js.map