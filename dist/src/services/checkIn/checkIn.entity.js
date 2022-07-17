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
const users_entity_1 = require("../users/users.entity");
let CheckInEntity = class CheckInEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdFactura' }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => users_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdUsuario' }),
    __metadata("design:type", Array)
], CheckInEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'DescripcionDeCompra', length: '250' }),
    __metadata("design:type", String)
], CheckInEntity.prototype, "purchaseDescription", void 0);
__decorate([
    typeorm_1.Column({ name: 'RNC', length: '50' }),
    __metadata("design:type", String)
], CheckInEntity.prototype, "rnc", void 0);
__decorate([
    typeorm_1.Column({ name: 'IVA', type: 'decimal', precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "iva", void 0);
__decorate([
    typeorm_1.Column({ name: 'Cantidad' }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ name: 'PagoCon' }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "payWith", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 7, scale: 2, name: 'Devuelta' }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "moneyBack", void 0);
__decorate([
    typeorm_1.Column({ type: 'decimal', precision: 7, scale: 2, name: 'TotalAPagar' }),
    __metadata("design:type", Number)
], CheckInEntity.prototype, "totalToPay", void 0);
__decorate([
    typeorm_1.Column({ type: 'bit', name: 'AplicaDevolicion' }),
    __metadata("design:type", Boolean)
], CheckInEntity.prototype, "applyReturned", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], CheckInEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], CheckInEntity.prototype, "updatedAt", void 0);
CheckInEntity = __decorate([
    typeorm_1.Entity('Factura')
], CheckInEntity);
exports.default = CheckInEntity;
//# sourceMappingURL=checkIn.entity.js.map