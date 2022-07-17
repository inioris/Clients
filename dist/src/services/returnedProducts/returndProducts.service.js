"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const returnedProducts_middlewares_1 = require("./returnedProducts.middlewares");
const returnedProducts_entity_1 = require("./returnedProducts.entity");
exports.default = services_1.registerService(() => ({
    name: 'returned-products',
    entity: 'returnedProducts',
    service: services_1.createService(returnedProducts_entity_1.default),
    middlewares: returnedProducts_middlewares_1.default,
}));
//# sourceMappingURL=returndProducts.service.js.map