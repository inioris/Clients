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
const typeorm_1 = require("typeorm");
const checkIn_entity_1 = require("./checkIn.entity");
const saleProducts_entity_1 = require("../saleProducts/saleProducts.entity");
const errors_1 = require("../../skeleton/services/errors");
const lodash_1 = require("lodash");
class CheckIn {
    constructor(entityRepository = typeorm_1.getRepository(checkIn_entity_1.default), entitySaleProducts = typeorm_1.getRepository(saleProducts_entity_1.default)) {
        this.entityRepository = entityRepository;
        this.entitySaleProducts = entitySaleProducts;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.entityRepository.insert(data);
                const id = result.identifiers[0];
                const saleProducts = data.listOfProductSale.map(a => {
                    lodash_1.set(a, 'checkIn', id.id);
                    const createdAt = new Date();
                    const updatedAt = new Date();
                    lodash_1.set(a, 'createdAt', createdAt);
                    lodash_1.set(a, 'udatedAt', updatedAt);
                    return a;
                });
                yield this.entitySaleProducts.insert(saleProducts.map(x => x));
                return result;
            }
            catch (e) {
                console.log('service:create', `An error happened while creating data with:\n
        ${JSON.stringify(data, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
    delete(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield lodash_1.get(id, query);
            try {
                yield this.entityRepository.remove(entity);
                return entity;
            }
            catch (e) {
                console.log('service:delete', `An error happened while deleting data with ID: ${id}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
    find(query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.entityRepository.find(query);
            }
            catch (e) {
                console.log('service:find', `An error happened while fetching data with query:
        ${JSON.stringify(query, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.entityRepository.findOne(id);
            const query = {
                productos: 'uno mas',
            };
            lodash_1.set(entity, 'producto', query);
            if (entity) {
                return entity;
            }
            throw new errors_1.NotFound();
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield lodash_1.get(id, query);
            try {
                yield this.entityRepository.update(this.entityRepository.getId(entity), data);
                return yield lodash_1.get(id, query);
            }
            catch (e) {
                console.log('service:update', `An error happened while updating data with id: ${id}\n
data: ${JSON.stringify(data, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
}
exports.default = CheckIn;
//# sourceMappingURL=checkIn.class.js.map