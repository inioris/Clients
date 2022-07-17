"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const rol_middlewares_1 = require("./rol.middlewares");
const rol_entity_1 = require("./rol.entity");
exports.default = services_1.registerService(() => ({
    name: 'rol',
    entity: 'rol',
    service: services_1.createService(rol_entity_1.default),
    middlewares: rol_middlewares_1.default,
}));
//# sourceMappingURL=rol.service.js.map