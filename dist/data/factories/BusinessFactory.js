"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const typeorm_1 = require("typeorm");
const business_entity_1 = require("../../src/services/business/business.entity");
const data = [
    {
        name: 'OrionTek',
    },
    {
        name: 'Universidad Unphu',
    },
];
index_1.define(business_entity_1.default, (_faker, _factory, count) => __awaiter(this, void 0, void 0, function* () {
    const entity = new business_entity_1.default();
    entity.name = data[count].name;
    return entity;
}), typeorm_1.getConnection());
//# sourceMappingURL=BusinessFactory.js.map