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
exports.setAuthorFromSessionMiddleware = () => (req, _res, next) => __awaiter(this, void 0, void 0, function* () {
    if (lodash_1.get(req, 'service.method') === 'create' || lodash_1.get(req, 'service.method') === 'update') {
        const userId = lodash_1.get(req, 'auth.user.id');
        const path = lodash_1.get(req, 'service.method') === 'create' ? 'createdBy' : 'updatedBy';
        if (Array.isArray(req.body)) {
            for (const item in lodash_1.get(req, 'body')) {
                lodash_1.set(req, `body[${item}].${path}`, userId);
            }
        }
        else {
            lodash_1.set(req, `body.${path}`, userId);
        }
    }
    next();
});
//# sourceMappingURL=setAuthorFromSession.middleware.js.map