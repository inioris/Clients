"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const statusProducts_middlewares_1 = require("./statusProducts.middlewares");
const statusProducts_entity_1 = require("./statusProducts.entity");
exports.default = services_1.registerService(() => ({
    name: 'status-products',
    entity: 'status-products',
    service: services_1.createService(statusProducts_entity_1.default),
    middlewares: statusProducts_middlewares_1.default,
}));
//# sourceMappingURL=statusProducts.service.js.map