"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const address_entity_1 = require("../address/address.entity");
let ClientsEntity = class ClientsEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdCliente' }),
    __metadata("design:type", Number)
], ClientsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '100' }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'Usuario', length: '150', unique: true }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "userName", void 0);
__decorate([
    typeorm_1.Column({ name: 'Email', length: '100', unique: true }),
    __metadata("design:type", String)
], ClientsEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdEmpresa' }),
    __metadata("design:type", Number)
], ClientsEntity.prototype, "business", void 0);
__decorate([
    typeorm_1.OneToMany(() => address_entity_1.default, address => address.client),
    __metadata("design:type", address_entity_1.default)
], ClientsEntity.prototype, "address", void 0);
ClientsEntity = __decorate([
    typeorm_1.Entity('Clientes')
], ClientsEntity);
exports.default = ClientsEntity;
//# sourceMappingURL=clients.entity.js.map