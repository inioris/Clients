"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateAuthTokenAccess_middleware_1 = require("../../middlewares/validateAuthTokenAccess.middleware");
const middlewares = {
    before: {
        all: [validateAuthTokenAccess_middleware_1.default()],
        find: [],
        get: [],
        create: [],
        update: [],
        delete: [],
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        delete: [],
    },
};
exports.default = middlewares;
//# sourceMappingURL=invoiceConfiguration.middleware.js.map