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
let RolEntity = class RolEntity extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdRol' }),
    __metadata("design:type", Number)
], RolEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ name: 'Permisos', length: '30', unique: true }),
    __metadata("design:type", String)
], RolEntity.prototype, "permissions", void 0);
RolEntity = __decorate([
    typeorm_1.Entity('Roles')
], RolEntity);
exports.default = RolEntity;
//# sourceMappingURL=rol.entity.js.map