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
const clients_entity_1 = require("../../src/services/clients/clients.entity");
const data = [
    {
        name: 'Alejandro Ramirez',
        userName: 'inioris',
        email: 'inioris1@gmail.com',
        business: 1,
    },
];
index_1.define(clients_entity_1.default, (_faker, _factory, count) => __awaiter(this, void 0, void 0, function* () {
    const entity = new clients_entity_1.default();
    entity.name = data[count].name;
    entity.userName = data[count].userName;
    entity.email = data[count].email;
    entity.business = data[count].business;
    return entity;
}), typeorm_1.getConnection());
//# sourceMappingURL=ClientsFactory.js.map