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
let InvoiceConfigurationEntity = class InvoiceConfigurationEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdConfiguracionDeFactura' }),
    __metadata("design:type", Number)
], InvoiceConfigurationEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Provincia', length: '50' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "province", void 0);
__decorate([
    typeorm_1.Column({ name: 'Telefono', length: '50' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], InvoiceConfigurationEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Calle', length: '200' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "Street", void 0);
__decorate([
    typeorm_1.Column({ name: 'Direccion', length: '500' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({ name: 'CodigoPostal', length: '20' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "postalCode", void 0);
__decorate([
    typeorm_1.Column({ name: 'RNC', length: '30' }),
    __metadata("design:type", String)
], InvoiceConfigurationEntity.prototype, "rnc", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], InvoiceConfigurationEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], InvoiceConfigurationEntity.prototype, "updatedAt", void 0);
InvoiceConfigurationEntity = __decorate([
    typeorm_1.Entity('ConfiguracionDeFactura')
], InvoiceConfigurationEntity);
exports.default = InvoiceConfigurationEntity;
//# sourceMappingURL=invoiceConfiguration.entity.js.map