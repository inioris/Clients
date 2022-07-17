"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("../../skeleton/middlewares");
const setTokenHeader_1 = require("./middleware/setTokenHeader");
const middlewares = (_app) => {
    return {
        before: {
            all: [],
            find: [middlewares_1.disallow()],
            get: [middlewares_1.disallow()],
            create: [],
            update: [middlewares_1.disallow()],
            delete: [middlewares_1.disallow()],
        },
        after: {
            all: [],
            find: [],
            get: [],
            create: [setTokenHeader_1.default()],
            update: [],
            delete: [],
        },
    };
};
exports.default = middlewares;
//# sourceMappingURL=auth.middleware.js.map