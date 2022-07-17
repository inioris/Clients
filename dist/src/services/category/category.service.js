"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const category_middlewares_1 = require("./category.middlewares");
const category_entity_1 = require("./category.entity");
exports.default = services_1.registerService(() => ({
    name: 'category',
    entity: 'category',
    service: services_1.createService(category_entity_1.default),
    middlewares: category_middlewares_1.default,
}));
//# sourceMappingURL=category.service.js.map