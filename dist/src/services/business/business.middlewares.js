"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest_middleware_1 = require("../../middlewares/validateRequest.middleware");
const relations = ['name'];
const middlewares = (_app) => ({
    before: {
        all: [],
        find: [],
        get: [],
        create: [validateRequest_middleware_1.validateRequest(relations)],
        update: [validateRequest_middleware_1.validateRequest(relations)],
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
});
exports.default = middlewares;
//# sourceMappingURL=business.middlewares.js.map