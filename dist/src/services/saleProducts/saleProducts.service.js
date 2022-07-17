"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const saleProducts_middlewares_1 = require("./saleProducts.middlewares");
const saleProducts_entity_1 = require("./saleProducts.entity");
exports.default = services_1.registerService(() => ({
    name: 'sale-products',
    entity: 'sale-products',
    service: services_1.createService(saleProducts_entity_1.default),
    middlewares: saleProducts_middlewares_1.default,
}));
//# sourceMappingURL=saleProducts.service.js.map