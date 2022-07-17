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
exports.paginateMiddleware = () => (req, _res, next) => __awaiter(this, void 0, void 0, function* () {
    if (lodash_1.get(req, 'query.paginate')) {
        const page = lodash_1.get(req, 'query.page') || 1;
        const perPage = lodash_1.get(req, 'query.perPage') || 10;
        const offset = ((page * perPage) - perPage) || 0;
        lodash_1.set(req, 'query.skip', offset);
        lodash_1.set(req, 'query.take', perPage);
        console.log(req.query);
    }
    next();
});
//# sourceMappingURL=paginate.middleware.js.map