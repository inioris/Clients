"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const returnedProductsStatus_middlewares_1 = require("./returnedProductsStatus.middlewares");
const returnedProductsStatus_entity_1 = require("./returnedProductsStatus.entity");
exports.default = services_1.registerService(() => ({
    name: 'returned-products-status',
    entity: 'returnedProductsStatus',
    service: services_1.createService(returnedProductsStatus_entity_1.default),
    middlewares: returnedProductsStatus_middlewares_1.default,
}));
//# sourceMappingURL=returnedProductsStatus.service.js.map