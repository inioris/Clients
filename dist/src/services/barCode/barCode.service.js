"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const barCode_middleware_1 = require("./barCode.middleware");
const barCode_entity_1 = require("./barCode.entity");
exports.default = services_1.registerService(() => ({
    name: 'bar-code',
    entity: 'barCode',
    service: services_1.createService(barCode_entity_1.default),
    middlewares: barCode_middleware_1.default,
}));
//# sourceMappingURL=barCode.service.js.map