"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const types_middlewares_1 = require("./types.middlewares");
const types_entity_1 = require("./types.entity");
exports.default = services_1.registerService(() => ({
    name: 'types',
    entity: 'types',
    service: services_1.createService(types_entity_1.default),
    middlewares: types_middlewares_1.default,
}));
//# sourceMappingURL=types.service.js.map