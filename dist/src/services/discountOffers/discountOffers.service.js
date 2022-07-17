"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const discountOffers_middleware_1 = require("./discountOffers.middleware");
const discountOffers_entity_1 = require("./discountOffers.entity");
exports.default = services_1.registerService(() => ({
    name: 'discount-offers',
    entity: 'discountOffers',
    service: services_1.createService(discountOffers_entity_1.default),
    middlewares: discountOffers_middleware_1.default,
}));
//# sourceMappingURL=discountOffers.service.js.map