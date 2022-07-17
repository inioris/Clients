"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const expirationDate_middleware_1 = require("./expirationDate.middleware");
const expirationDate_entity_1 = require("./expirationDate.entity");
exports.default = services_1.registerService(() => ({
    name: 'expiration-date',
    entity: 'expirationDate',
    service: services_1.createService(expirationDate_entity_1.default),
    middlewares: expirationDate_middleware_1.default,
}));
//# sourceMappingURL=expirationDate.service.js.map