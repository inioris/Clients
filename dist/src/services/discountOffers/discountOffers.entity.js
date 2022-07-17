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
const ProductsInOffers_entity_1 = require("../ProductsInOffers/ProductsInOffers.entity");
const barCode_entity_1 = require("../barCode/barCode.entity");
let DiscountOffersEntity = class DiscountOffersEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdOfertas' }),
    __metadata("design:type", Number)
], DiscountOffersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ProductsInOffers_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdProducto' }),
    __metadata("design:type", Array)
], DiscountOffersEntity.prototype, "productInOffers", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '200' }),
    __metadata("design:type", String)
], DiscountOffersEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 7,
        scale: 2,
        name: 'Precio'
    }),
    __metadata("design:type", Number)
], DiscountOffersEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ name: 'Codigo' }),
    __metadata("design:type", String)
], DiscountOffersEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.ManyToOne(() => barCode_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdCodigoDeBarra' }),
    __metadata("design:type", Array)
], DiscountOffersEntity.prototype, "codeBar", void 0);
__decorate([
    typeorm_1.Column({ type: 'bit', name: 'Habilitado' }),
    __metadata("design:type", Boolean)
], DiscountOffersEntity.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], DiscountOffersEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Descripcion', length: '250' }),
    __metadata("design:type", String)
], DiscountOffersEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], DiscountOffersEntity.prototype, "createdAt", void 0);
DiscountOffersEntity = __decorate([
    typeorm_1.Entity('Ofertas')
], DiscountOffersEntity);
exports.default = DiscountOffersEntity;
//# sourceMappingURL=discountOffers.entity.js.map