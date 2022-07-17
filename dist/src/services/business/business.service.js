"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const business_middlewares_1 = require("./business.middlewares");
const business_entity_1 = require("./business.entity");
exports.default = services_1.registerService((app) => ({
    name: 'business',
    entity: 'business',
    service: services_1.createService(business_entity_1.default),
    middlewares: business_middlewares_1.default(app),
}));
//# sourceMappingURL=business.service.js.map