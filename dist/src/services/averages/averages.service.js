"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const averages_middlewares_1 = require("./averages.middlewares");
const averages_entity_1 = require("./averages.entity");
exports.default = services_1.registerService(() => ({
    name: 'averages',
    entity: 'averages',
    service: services_1.createService(averages_entity_1.default),
    middlewares: averages_middlewares_1.default,
}));
//# sourceMappingURL=averages.service.js.map