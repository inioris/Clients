"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateAuthTokenAccess_middleware_1 = require("../../middlewares/validateAuthTokenAccess.middleware");
const productBillingControl_middleware_1 = require("./middleware/productBillingControl.middleware");
const getRelations_middleware_1 = require("../../middlewares/getRelations.middleware");
const relations = ['user'];
const middlewares = (app) => ({
    before: {
        all: [validateAuthTokenAccess_middleware_1.default()],
        find: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        get: [getRelations_middleware_1.getRelationsMiddleware(relations)],
        create: [productBillingControl_middleware_1.ProductBillingControlMiddleware(app)],
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
//# sourceMappingURL=checkIn.middlewares.js.map