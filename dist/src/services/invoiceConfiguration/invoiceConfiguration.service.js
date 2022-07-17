"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const invoiceConfiguration_middleware_1 = require("./invoiceConfiguration.middleware");
const invoiceConfiguration_entity_1 = require("./invoiceConfiguration.entity");
exports.default = services_1.registerService(() => ({
    name: 'invoice-configuration',
    entity: 'invoiceConfiguration',
    service: services_1.createService(invoiceConfiguration_entity_1.default),
    middlewares: invoiceConfiguration_middleware_1.default,
}));
//# sourceMappingURL=invoiceConfiguration.service.js.map