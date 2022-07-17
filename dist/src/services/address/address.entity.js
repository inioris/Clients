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
const clients_entity_1 = require("../clients/clients.entity");
let AddressEntity = class AddressEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdDireccion' }),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Calle', length: '200' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "street", void 0);
__decorate([
    typeorm_1.Column({ name: 'CodigoPostal', length: '8' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "postalCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'NumeroCasa', length: '10' }),
    __metadata("design:type", String)
], AddressEntity.prototype, "numberHome", void 0);
__decorate([
    typeorm_1.ManyToOne(() => clients_entity_1.default, { eager: true }),
    typeorm_1.JoinColumn({ name: 'IdCliente' }),
    __metadata("design:type", clients_entity_1.default)
], AddressEntity.prototype, "client", void 0);
__decorate([
    typeorm_1.Column({ name: 'EsPrincipal', default: false }),
    __metadata("design:type", Boolean)
], AddressEntity.prototype, "enabled", void 0);
AddressEntity = __decorate([
    typeorm_1.Entity('Direccion')
], AddressEntity);
exports.default = AddressEntity;
//# sourceMappingURL=address.entity.js.map