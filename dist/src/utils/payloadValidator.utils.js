"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PayloadValidator {
    constructor(req) {
        this.messages = [];
        this.req = req;
        this.validations = [];
    }
    validate(params) {
        this.validations = params.map((item) => {
            return { property: item, message: `${item} is required` };
        });
    }
    getErrorsArray(key) {
        this.req.body[key].forEach((item) => {
            this.invalidProperties = this.validations
                .filter(e => !(item[e.property]));
            this.invalidProperties.forEach(prop => this.messages.push(prop.message));
        });
        return this.messages.length && [...new Set(this.messages)];
    }
    getErrors() {
        if (Array.isArray(this.req.body)) {
            for (const item of this.req.body) {
                this.invalidProperties = this.validations
                    .filter(e => !(item[e.property]));
            }
            this.messages = this.invalidProperties.map(prop => prop.message);
        }
        else {
            this.invalidProperties = this.validations
                .filter(e => !(this.req.body[e.property]
                || this.req.query[e.property]
                || this.req.params[e.property]));
            this.messages = this.invalidProperties.map(prop => prop.message);
        }
        return this.messages.length && [...new Set(this.messages)];
    }
}
exports.default = PayloadValidator;
//# sourceMappingURL=payloadValidator.utils.js.map