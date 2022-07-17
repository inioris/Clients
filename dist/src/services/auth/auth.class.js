"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
const jwt = require("jsonwebtoken");
const default_1 = require("../../../config/default");
const errors_1 = require("../../skeleton/services/errors");
class AuthService {
    constructor(entityUsersRepository = typeorm_1.getRepository(users_entity_1.default)) {
        this.entityUsersRepository = entityUsersRepository;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decomprimirPassword = new users_entity_1.default();
                const user = yield this.entityUsersRepository.findOne({ user: data.username.toLowerCase() });
                if (user) {
                    const confirmPassword = yield decomprimirPassword.validatedPassword({ checkPassword: data.password, password: user.password });
                    if (confirmPassword) {
                        const dataUser = {
                            idUser: user.id,
                            name: user.name,
                            username: user.user,
                            email: user.email,
                            rol: user.rol,
                        };
                        const tokenUser = jwt.sign(dataUser, default_1.default.token.secretKey);
                        return tokenUser;
                    }
                }
            }
            catch (e) {
                throw new errors_1.BadRequest('Invalid password a username');
            }
            throw new errors_1.BadRequest('Invalid password a username');
        });
    }
    delete(_id, _query) {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    find(_query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    update(_id, _data, _query) {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.default = AuthService;
//# sourceMappingURL=auth.class.js.map