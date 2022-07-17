"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const addDateInPostAndUpdate = (req, _res, next) => {
    lodash_1.set(req.body, 'createdAt', new Date());
    lodash_1.set(req.body, 'updatedAt', new Date());
    next();
};
exports.default = addDateInPostAndUpdate;
//# sourceMappingURL=addDateInPostAndUpdate.js.map