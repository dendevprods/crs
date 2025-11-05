// --- Base Includes ---
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
    INCLUDE_ACTIVITY_LOG: function() {
        return INCLUDE_ACTIVITY_LOG;
    },
    INCLUDE_CLIENT_DETAILS: function() {
        return INCLUDE_CLIENT_DETAILS;
    },
    INCLUDE_COMPANY_REPRESENTATIVES: function() {
        return INCLUDE_COMPANY_REPRESENTATIVES;
    },
    INCLUDE_DEPARTMENT: function() {
        return INCLUDE_DEPARTMENT;
    },
    INCLUDE_DEPARTMENT_DETAILS: function() {
        return INCLUDE_DEPARTMENT_DETAILS;
    },
    INCLUDE_EMPLOYEE_BASE: function() {
        return INCLUDE_EMPLOYEE_BASE;
    },
    INCLUDE_EMPLOYEE_WITH_TICKETS: function() {
        return INCLUDE_EMPLOYEE_WITH_TICKETS;
    },
    INCLUDE_PERSON: function() {
        return INCLUDE_PERSON;
    },
    INCLUDE_PRODUCT_AND_SERVICE: function() {
        return INCLUDE_PRODUCT_AND_SERVICE;
    },
    INCLUDE_REPRESENTATIVE: function() {
        return INCLUDE_REPRESENTATIVE;
    },
    INCLUDE_ROLE: function() {
        return INCLUDE_ROLE;
    },
    INCLUDE_ROLE_WITH_EMPLOYEES: function() {
        return INCLUDE_ROLE_WITH_EMPLOYEES;
    },
    INCLUDE_TASK_DETAILS: function() {
        return INCLUDE_TASK_DETAILS;
    },
    INCLUDE_TICKET_BASE: function() {
        return INCLUDE_TICKET_BASE;
    },
    INCLUDE_TICKET_DETAILS: function() {
        return INCLUDE_TICKET_DETAILS;
    }
});
const _extends = require("@swc/helpers/_/_extends");
const INCLUDE_PERSON = {
    person: true
};
const INCLUDE_DEPARTMENT = {
    department: true
};
const INCLUDE_ROLE = {
    role: true
};
const INCLUDE_PRODUCT_AND_SERVICE = {
    product: true,
    service: true
};
const INCLUDE_EMPLOYEE_BASE = _extends._({}, INCLUDE_DEPARTMENT, INCLUDE_ROLE);
const INCLUDE_REPRESENTATIVE = {
    include: INCLUDE_PERSON
};
const INCLUDE_COMPANY_REPRESENTATIVES = {
    representatives: INCLUDE_REPRESENTATIVE
};
const INCLUDE_CLIENT_DETAILS = _extends._({}, INCLUDE_PERSON, {
    company: {
        include: INCLUDE_COMPANY_REPRESENTATIVES
    }
});
const INCLUDE_DEPARTMENT_DETAILS = {
    employees: {
        include: INCLUDE_EMPLOYEE_BASE
    }
};
const INCLUDE_TICKET_BASE = INCLUDE_PRODUCT_AND_SERVICE;
const INCLUDE_TICKET_DETAILS = {
    employees: {
        include: INCLUDE_EMPLOYEE_BASE
    },
    client: {
        include: INCLUDE_CLIENT_DETAILS
    },
    representative: {
        include: INCLUDE_PERSON
    }
};
const INCLUDE_EMPLOYEE_WITH_TICKETS = _extends._({}, INCLUDE_EMPLOYEE_BASE, {
    tickets: {
        include: INCLUDE_TICKET_DETAILS
    }
});
const INCLUDE_ACTIVITY_LOG = {
    author: {
        include: INCLUDE_EMPLOYEE_BASE
    }
};
const INCLUDE_TASK_DETAILS = {
    assignee: {
        include: INCLUDE_EMPLOYEE_BASE
    },
    taskComments: true
};
const INCLUDE_ROLE_WITH_EMPLOYEES = {
    employees: {
        include: INCLUDE_EMPLOYEE_BASE
    }
};

//# sourceMappingURL=prisma.includes.js.map