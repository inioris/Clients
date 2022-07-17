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
const errors_1 = require("../../../skeleton/services/errors");
const setTokenHeader = () => (_req, res, next) => __awaiter(this, void 0, void 0, function* () {
    if (res.result) {
        res.header('auth-token', res.result);
    }
    else {
        throw new errors_1.BadRequest('Invalid Access');
    }
    next();
});
exports.default = setTokenHeader;
//# sourceMappingURL=setTokenHeader.js.map