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
const lodash_1 = require("lodash");
const users_entity_1 = require("../users.entity");
const passwordEncryptBody = () => (req, _res, next) => __awaiter(this, void 0, void 0, function* () {
    const data = lodash_1.get(req, 'body');
    lodash_1.set(req, 'body.email', data.email.toLowerCase());
    lodash_1.set(req, 'body.user', data.user.toLowerCase());
    if (data.password) {
        const user = new users_entity_1.default();
        yield user.encryptPassword(lodash_1.get(data, 'password'));
        lodash_1.set(req, 'body.password', lodash_1.get(user, 'password'));
    }
    next();
});
exports.default = passwordEncryptBody;
//# sourceMappingURL=passwordEncryptBody.js.map