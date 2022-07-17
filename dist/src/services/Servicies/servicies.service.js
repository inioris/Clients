"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const servicies_middlewares_1 = require("./servicies.middlewares");
const servicies_entity_1 = require("./servicies.entity");
exports.default = services_1.registerService(() => ({
    name: 'services',
    entity: 'services',
    service: services_1.createService(servicies_entity_1.default),
    middlewares: servicies_middlewares_1.default,
}));
//# sourceMappingURL=servicies.service.js.map