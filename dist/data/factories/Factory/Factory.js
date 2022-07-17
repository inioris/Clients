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
const faker = require("faker");
class Factory {
    constructor(connection, entityClass, define, factories) {
        this.define = define;
        this.factories = factories;
        this.createMany = (times) => __awaiter(this, void 0, void 0, function* () {
            const entities = [];
            for (let i = 0; i < times; i += 1) {
                entities.push(yield this.create(i));
            }
            return entities;
        });
        this.create = (count) => __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.make(count);
            const result = yield this.repository.insert(entity);
            const insertedId = result.identifiers[0].id;
            return yield this.repository.findOne(insertedId);
        });
        this.repository = connection.getRepository(entityClass);
        this.mapCallback = (entity) => __awaiter(this, void 0, void 0, function* () { return entity; });
    }
    map(callback) {
        this.mapCallback = callback;
        return this;
    }
    make(count) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mapCallback(yield this.define(faker, this.factories, count), count);
        });
    }
}
exports.default = Factory;
//# sourceMappingURL=Factory.js.map