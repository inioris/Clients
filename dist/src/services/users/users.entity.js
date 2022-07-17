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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptNodejs = require("bcrypt-nodejs");
const util_1 = require("util");
const rol_entity_1 = require("../rol/rol.entity");
let UsersEntity = class UsersEntity extends typeorm_1.BaseEntity {
    encryptPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const salt = util_1.promisify(bcryptNodejs.genSalt);
                const key = yield salt(10);
                bcryptNodejs.hash(password, key, undefined, (err, hash) => {
                    if (err) {
                        return reject(err);
                    }
                    this.password = hash;
                    return resolve();
                });
            }));
        });
    }
    validatedPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifyPassword = util_1.promisify(bcryptNodejs.compare);
            return yield verifyPassword(password.checkPassword, password.password);
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'IdUsuario' }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => rol_entity_1.default),
    typeorm_1.JoinColumn({ name: 'IdRol' }),
    __metadata("design:type", Object)
], UsersEntity.prototype, "rol", void 0);
__decorate([
    typeorm_1.Column({ name: 'Nombre', length: '100' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ name: 'Usuario', length: '150', unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({ name: 'Email', length: '100', unique: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: 'Contrasena', length: '250' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ name: 'CreatedAt' }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'UpdatedAt' }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'AutorizadoPor' }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "authorizationBy", void 0);
UsersEntity = __decorate([
    typeorm_1.Entity('Usuarios')
], UsersEntity);
exports.default = UsersEntity;
//# sourceMappingURL=users.entity.js.map