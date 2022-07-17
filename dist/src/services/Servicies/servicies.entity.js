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
let ServiciesEntity = class ServiciesEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdServicio' }),
    __metadata("design:type", Number)
], ServiciesEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '100' }),
    __metadata("design:type", String)
], ServiciesEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'Codigo' }),
    __metadata("design:type", String)
], ServiciesEntity.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
        precision: 7,
        scale: 2,
        name: 'Costo'
    }),
    __metadata("design:type", Number)
], ServiciesEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], ServiciesEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Habilitado', default: true }),
    __metadata("design:type", Boolean)
], ServiciesEntity.prototype, "enabled", void 0);
__decorate([
    typeorm_1.Column({ name: 'Descripcion', length: '200', nullable: true }),
    __metadata("design:type", String)
], ServiciesEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], ServiciesEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], ServiciesEntity.prototype, "updatedAt", void 0);
ServiciesEntity = __decorate([
    typeorm_1.Entity('Servicios')
], ServiciesEntity);
exports.default = ServiciesEntity;
//# sourceMappingURL=servicies.entity.js.map