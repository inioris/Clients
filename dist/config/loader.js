"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const default_1 = require("./default");
const loadConfig = () => {
    const env = process.env.NODE_ENV || 'default';
    if (env) {
        const config = require(`./${env}`)['default'];
        return lodash_1.merge(default_1.default, config);
    }
    return default_1.default;
};
exports.default = loadConfig();
//# sourceMappingURL=loader.js.map