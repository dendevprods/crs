"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isExpandedTicket", {
    enumerable: true,
    get: function() {
        return isExpandedTicket;
    }
});
function isExpandedTicket(ticket) {
    return "client" in ticket || "department" in ticket || "employees" in ticket || "ticketItems" in ticket;
}

//# sourceMappingURL=ticket.guard.js.map