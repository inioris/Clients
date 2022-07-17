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
exports.setInformationMiddleware = (_app) => (req, _res, next) => __awaiter(this, void 0, void 0, function* () {
    const dataCode = yield _app.service('products').find(1);
    if (!lodash_1.isEmpty(dataCode)) {
        let code = `${Number(dataCode[0].code) + 1}`;
        const codeLength = code.length;
        if (codeLength === 1) {
            code = `000${code}`;
        }
        else if (codeLength === 2) {
            code = `00${code}`;
        }
        else if (codeLength === 3) {
            code = `0${code}`;
        }
        lodash_1.set(req.body, 'code', code);
    }
    else {
        lodash_1.set(req.body, 'code', '0001');
    }
    next();
});
//# sourceMappingURL=setInformationMiddleware.js.map