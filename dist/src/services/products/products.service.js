"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const products_middlewares_1 = require("./products.middlewares");
const products_entity_1 = require("./products.entity");
exports.default = services_1.registerService((app) => ({
    name: 'products',
    entity: 'products',
    service: services_1.createService(products_entity_1.default),
    middlewares: products_middlewares_1.default(app),
}));
//# sourceMappingURL=products.service.js.map