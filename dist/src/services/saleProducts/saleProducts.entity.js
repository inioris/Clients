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
const checkIn_entity_1 = require("../checkIn/checkIn.entity");
const products_entity_1 = require("../products/products.entity");
let SaleProductsEntity = class SaleProductsEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdVentaDeProducto' }),
    __metadata("design:type", Number)
], SaleProductsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => checkIn_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdFactura' }),
    __metadata("design:type", Array)
], SaleProductsEntity.prototype, "checkIn", void 0);
__decorate([
    typeorm_1.ManyToOne(() => products_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdProducto' }),
    __metadata("design:type", Array)
], SaleProductsEntity.prototype, "product", void 0);
__decorate([
    typeorm_1.Column({ name: 'Cantidad' }),
    __metadata("design:type", Number)
], SaleProductsEntity.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({ name: 'Devolucion', default: false }),
    __metadata("design:type", Boolean)
], SaleProductsEntity.prototype, "devolution", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], SaleProductsEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], SaleProductsEntity.prototype, "updatedAt", void 0);
SaleProductsEntity = __decorate([
    typeorm_1.Entity('VentaDeProductos')
], SaleProductsEntity);
exports.default = SaleProductsEntity;
//# sourceMappingURL=saleProducts.entity.js.map