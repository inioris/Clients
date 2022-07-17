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
const returnedProductsStatus_entity_1 = require("../returnedProductsStatus/returnedProductsStatus.entity");
const saleProducts_entity_1 = require("../saleProducts/saleProducts.entity");
let ReturnedProductsEntity = class ReturnedProductsEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdProductosRetirados' }),
    __metadata("design:type", Number)
], ReturnedProductsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => saleProducts_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdVentaDeProducto' }),
    __metadata("design:type", Object)
], ReturnedProductsEntity.prototype, "saleProduct", void 0);
__decorate([
    typeorm_1.ManyToOne(() => returnedProductsStatus_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdEstadoDeProductosRetirados' }),
    __metadata("design:type", Object)
], ReturnedProductsEntity.prototype, "returnedProductsStatus", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], ReturnedProductsEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], ReturnedProductsEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], ReturnedProductsEntity.prototype, "updatedAt", void 0);
ReturnedProductsEntity = __decorate([
    typeorm_1.Entity('ProductosRetirados')
], ReturnedProductsEntity);
exports.default = ReturnedProductsEntity;
//# sourceMappingURL=returnedProducts.entity.js.map