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
const provider_entity_1 = require("../../src/services/provider/provider.entity");
const data = [
    {
        name: 'Michel Goris',
        address: 'km 25 aut duarte',
        phone: '8297898479',
        email: 'michelgoris@gmail.com',
        user: 1,
    },
    {
        name: 'Michel Angel',
        address: 'km 27 aut duarte',
        phone: '8297898479',
        email: 'mhernandez@unphu.edu.do',
        user: 1,
    },
];
index_1.define(provider_entity_1.default, (_faker, _factory, count) => __awaiter(this, void 0, void 0, function* () {
    const entity = new provider_entity_1.default();
    entity.name = data[count].name;
    entity.address = data[count].address;
    entity.user = data[count].user;
    entity.phone = data[count].phone;
    entity.email = data[count].email;
    return entity;
}), typeorm_1.getConnection());
//# sourceMappingURL=ProviderFactory.js.map