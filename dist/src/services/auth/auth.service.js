"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const auth_middleware_1 = require("./auth.middleware");
const auth_class_1 = require("./auth.class");
exports.default = services_1.registerService(app => ({
    name: 'login',
    entity: 'auth',
    service: new auth_class_1.default(),
    middlewares: auth_middleware_1.default(app),
}));
//# sourceMappingURL=auth.service.js.map