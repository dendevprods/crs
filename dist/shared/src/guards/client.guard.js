"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isExpandedClient", {
    enumerable: true,
    get: function() {
        return isExpandedClient;
    }
});
function isExpandedClient(client) {
    return 'company' in client || 'person' in client;
}

//# sourceMappingURL=client.guard.js.map