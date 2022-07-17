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
const address_entity_1 = require("../../src/services/address/address.entity");
const data = [
    {
        street: 'KM 25 aut duarte',
        postalCode: '28021',
        numberHome: '8',
        enabled: 1,
        client: 1,
    },
    {
        street: 'KM 18 aut duarte',
        postalCode: '28030',
        numberHome: '28',
        enabled: 1,
        client: 1,
    },
];
index_1.define(address_entity_1.default, (_faker, _factory, count) => __awaiter(this, void 0, void 0, function* () {
    const entity = new address_entity_1.default();
    entity.street = data[count].street;
    entity.postalCode = data[count].postalCode;
    entity.client = data[count].client;
    entity.numberHome = data[count].numberHome;
    entity.enabled = data[count].enabled;
    return entity;
}), typeorm_1.getConnection());
//# sourceMappingURL=AddressFactory.js.map