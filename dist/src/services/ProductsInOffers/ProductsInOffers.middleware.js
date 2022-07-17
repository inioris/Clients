"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateAuthTokenAccess_middleware_1 = require("../../middlewares/validateAuthTokenAccess.middleware");
const getRelations_middleware_1 = require("../../middlewares/getRelations.middleware");
const relations = ['product', 'offers'];
const middlewares = {
    before: {
        all: [validateAuthTokenAccess_middleware_1.default()],
        find: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        get: [getRelations_middleware_1.getRelationsMiddleware(relations)],
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
//# sourceMappingURL=ProductsInOffers.middleware.js.map