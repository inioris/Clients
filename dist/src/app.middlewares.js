"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("./skeleton/middlewares");
const middlewares = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        delete: [],
    },
    after: {
        all: [middlewares_1.sendResponse()],
        find: [],
        get: [],
        create: [],
        update: [],
        delete: [],
    },
};
exports.default = middlewares;
//# sourceMappingURL=app.middlewares.js.map