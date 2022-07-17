"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateAuthTokenAccess_middleware_1 = require("../../middlewares/validateAuthTokenAccess.middleware");
const getRelations_middleware_1 = require("../../middlewares/getRelations.middleware");
const setInformationMiddleware_1 = require("./middleware/setInformationMiddleware");
const relations = ['category', 'provider', 'expirationDate', 'codeBar'];
const middlewares = (_app) => ({
    before: {
        all: [validateAuthTokenAccess_middleware_1.default()],
        find: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        get: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        create: [setInformationMiddleware_1.setInformationMiddleware(_app)],
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
});
exports.default = middlewares;
//# sourceMappingURL=products.middlewares.js.map