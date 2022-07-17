"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const users_middlewares_1 = require("./users.middlewares");
const users_entity_1 = require("./users.entity");
exports.default = services_1.registerService(() => ({
    name: 'users',
    entity: 'users',
    service: services_1.createService(users_entity_1.default),
    middlewares: users_middlewares_1.default,
}));
//# sourceMappingURL=users.service.js.map