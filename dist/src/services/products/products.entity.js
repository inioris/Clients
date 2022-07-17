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
const provider_entity_1 = require("../provider/provider.entity");
const category_entity_1 = require("../category/category.entity");
const expirationDate_entity_1 = require("../expirationDate/expirationDate.entity");
const barCode_entity_1 = require("../barCode/barCode.entity");
const types_entity_1 = require("../Types/types.entity");
let ProductsEntity = class ProductsEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdProducto' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '150' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'Codigo' }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: 'Cantidad' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 7,
        scale: 2,
        name: 'Precio'
    }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 7,
        scale: 2,
        name: 'PrecioDeCompra'
    }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "priceBurchase", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdEstadoDeProducto' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "statusProduct", void 0);
__decorate([
    typeorm_1.ManyToOne(() => types_entity_1.default, { eager: true }),
    typeorm_1.JoinColumn({ name: 'IdTipo' }),
    __metadata("design:type", types_entity_1.default)
], ProductsEntity.prototype, "productType", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdCategoria' }),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.ManyToOne(() => provider_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdProveedor' }),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "provider", void 0);
__decorate([
    typeorm_1.ManyToOne(() => expirationDate_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdFechaDeCaducidad' }),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "expirationDate", void 0);
__decorate([
    typeorm_1.ManyToOne(() => barCode_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdCodigoDeBarra' }),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "codeBar", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Habilitado', default: true }),
    __metadata("design:type", Boolean)
], ProductsEntity.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column({ name: 'Descripcion', length: '200', nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], ProductsEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], ProductsEntity.prototype, "updatedAt", void 0);
ProductsEntity = __decorate([
    typeorm_1.Entity('Productos')
], ProductsEntity);
exports.default = ProductsEntity;
//# sourceMappingURL=products.entity.js.map