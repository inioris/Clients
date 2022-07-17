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
const discountOffers_entity_1 = require("../discountOffers/discountOffers.entity");
let ProductsInOffersEntity = class ProductsInOffersEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdProductoEnOferta' }),
    __metadata("design:type", Number)
], ProductsInOffersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => products_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdProducto' }),
    __metadata("design:type", Array)
], ProductsInOffersEntity.prototype, "product", void 0);
__decorate([
    typeorm_1.ManyToOne(() => discountOffers_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdOfertas' }),
    __metadata("design:type", Array)
], ProductsInOffersEntity.prototype, "offers", void 0);
ProductsInOffersEntity = __decorate([
    typeorm_1.Entity('ProductosEnOfertas')
], ProductsInOffersEntity);
exports.default = ProductsInOffersEntity;
//# sourceMappingURL=ProductsInOffers.entity.js.map