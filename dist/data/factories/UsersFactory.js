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
const users_entity_1 = require("../../src/services/users/users.entity");
const data = [
    {
        rol: 1,
        name: 'Ramon Punto de Venta',
        user: 'ramon',
        email: 'ramon@gmail.com',
        password: '$2a$10$TAtXV9zRQO/EGKKCNe2j6.jxgSjMc24fjoskWqfbYRnaG6yhLXji2',
        authorizationBy: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
index_1.define(users_entity_1.default, (_faker, _factory, count) => __awaiter(this, void 0, void 0, function* () {
    const entity = new users_entity_1.default();
    entity.rol = data[count].rol;
    entity.name = data[count].name;
    entity.user = data[count].user;
    entity.email = data[count].email;
    entity.password = data[count].password;
    entity.authorizationBy = data[count].authorizationBy;
    entity.createdAt = data[count].createdAt;
    entity.updatedAt = data[count].updatedAt;
    return entity;
}), typeorm_1.getConnection());
//# sourceMappingURL=UsersFactory.js.map