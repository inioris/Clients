"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const jwt = require("jsonwebtoken");
const default_1 = require("../../config/default");
const errors_1 = require("../skeleton/services/errors");
const validateAuthTokenAccessMiddleware = () => (req, _res, next) => {
    try {
        const userAuth = lodash_1.get(req.headers, 'authorization');
        const userAuthFinish = userAuth.replace('Bearer ', '');
        const payload = jwt.verify(userAuthFinish, default_1.default.token.secretKey);
        if (lodash_1.get(payload, 'idUser')) {
            req['user'] = payload;
            return next();
        }
    }
    catch (e) {
        throw new errors_1.BadRequest('Access Invalid Token');
    }
};
exports.default = validateAuthTokenAccessMiddleware;
//# sourceMappingURL=validateAuthTokenAccess.middleware.js.map