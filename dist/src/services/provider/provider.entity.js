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
const products_entity_1 = require("../products/products.entity");
let ProviderEntity = class ProviderEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdProveedor' }),
    __metadata("design:type", Number)
], ProviderEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '200' }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], ProviderEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Direccion' }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ name: 'Telefono' }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ name: 'Email' }),
    __metadata("design:type", String)
], ProviderEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.OneToMany(() => products_entity_1.default, product => product.provider),
    __metadata("design:type", Array)
], ProviderEntity.prototype, "product", void 0);
ProviderEntity = __decorate([
    typeorm_1.Entity('Proveedor')
], ProviderEntity);
exports.default = ProviderEntity;
//# sourceMappingURL=provider.entity.js.map