"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const address_entity_1 = require("./address.entity");
const address_middlewares_1 = require("./address.middlewares");
exports.default = services_1.registerService(() => ({
    name: 'address',
    entity: 'address',
    service: services_1.createService(address_entity_1.default),
    middlewares: address_middlewares_1.default,
}));
//# sourceMappingURL=address.service.js.map