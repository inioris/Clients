"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const provider_middlewares_1 = require("./provider.middlewares");
const provider_entity_1 = require("./provider.entity");
exports.default = services_1.registerService(() => ({
    name: 'provider',
    entity: 'provider',
    service: services_1.createService(provider_entity_1.default),
    middlewares: provider_middlewares_1.default,
}));
//# sourceMappingURL=provider.service.js.map