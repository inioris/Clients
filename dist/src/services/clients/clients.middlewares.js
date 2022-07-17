"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRelations_middleware_1 = require("../../middlewares/getRelations.middleware");
const middlewares = {
    before: {
        all: [],
        find: [getRelations_middleware_1.getRelationsMiddleware(['address'])],
        get: [getRelations_middleware_1.getRelationsMiddleware(['address'])],
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
//# sourceMappingURL=clients.middlewares.js.map