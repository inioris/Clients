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
exports.mapper = (data, action, dataType) => __awaiter(this, void 0, void 0, function* () {
    const object = lodash_1.clone(data);
    for (const item in object) {
        if (typeof object[item] === 'object') {
            object[item] = yield exports.mapper(object[item], action, dataType);
        }
        if (typeof object[item] === dataType) {
            object[item] = yield action(object[item]);
        }
    }
    return object;
});
//# sourceMappingURL=mapper.utils.js.map