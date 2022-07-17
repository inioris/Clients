"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const clients_middlewares_1 = require("./clients.middlewares");
const clients_entity_1 = require("./clients.entity");
exports.default = services_1.registerService(() => ({
    name: 'clients',
    entity: 'clients',
    service: services_1.createService(clients_entity_1.default),
    middlewares: clients_middlewares_1.default,
}));
//# sourceMappingURL=clients.service.js.map