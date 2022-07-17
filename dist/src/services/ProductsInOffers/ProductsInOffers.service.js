"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const ProductsInOffers_entity_1 = require("./ProductsInOffers.entity");
const ProductsInOffers_middleware_1 = require("./ProductsInOffers.middleware");
exports.default = services_1.registerService(() => ({
    name: 'products-in-offers',
    entity: 'productsInOffers',
    service: services_1.createService(ProductsInOffers_entity_1.default),
    middlewares: ProductsInOffers_middleware_1.default,
}));
//# sourceMappingURL=ProductsInOffers.service.js.map