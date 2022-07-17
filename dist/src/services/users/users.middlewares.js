"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordEncryptBody_1 = require("./middlewareUsers/passwordEncryptBody");
const validateAuthTokenAccess_middleware_1 = require("../../middlewares/validateAuthTokenAccess.middleware");
const getRelations_middleware_1 = require("../../middlewares/getRelations.middleware");
const relations = ['rol'];
const middlewares = {
    before: {
        all: [validateAuthTokenAccess_middleware_1.default()],
        find: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        get: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        create: [passwordEncryptBody_1.default()],
        update: [passwordEncryptBody_1.default()],
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
//# sourceMappingURL=users.middlewares.js.map