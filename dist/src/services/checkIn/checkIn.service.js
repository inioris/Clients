"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../skeleton/services");
const checkIn_middlewares_1 = require("./checkIn.middlewares");
const checkIn_class_1 = require("./checkIn.class");
exports.default = services_1.registerService((app) => ({
    name: 'check-ins',
    entity: 'checkIn',
    service: new checkIn_class_1.default(),
    middlewares: checkIn_middlewares_1.default(app),
}));
//# sourceMappingURL=checkIn.service.js.map