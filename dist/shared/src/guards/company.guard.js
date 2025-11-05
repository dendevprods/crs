"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isExpandedCompany", {
    enumerable: true,
    get: function() {
        return isExpandedCompany;
    }
});
function isExpandedCompany(company) {
    return 'representatives' in company;
}

//# sourceMappingURL=company.guard.js.map