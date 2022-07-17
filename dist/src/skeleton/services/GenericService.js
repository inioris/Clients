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
const errors_1 = require("./errors");
const Logger_1 = require("./Logger");
const lodash_1 = require("lodash");
class GenericService {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    create(data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = data;
            if (Array.isArray(data)) {
                for (const item in params) {
                    lodash_1.set(params[item], 'createdAt', new Date());
                    lodash_1.set(params[item], 'updatedAt', new Date());
                }
            }
            else {
                params.createdAt = new Date();
                params.updatedAt = new Date();
            }
            try {
                const result = yield this.entityRepository.insert(params);
                const id = result.identifiers[0];
                return yield this.get(id, query);
            }
            catch (e) {
                Logger_1.default.log('service:create', `An error happened while creating data with:\n
        ${JSON.stringify(params, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
    delete(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.get(id, query);
            try {
                yield this.entityRepository.remove(entity);
                return entity;
            }
            catch (e) {
                Logger_1.default.log('service:delete', `An error happened while deleting data with ID: ${id}`, e);
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
                Logger_1.default.log('service:find', `An error happened while fetching data with query:
        ${JSON.stringify(query, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
    get(id, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let entity;
            try {
                entity = yield this.entityRepository.findOne(id, query);
            }
            catch (e) {
                Logger_1.default.log('service:get', `An error happened while getting data with id: ${id}`, e);
                throw new errors_1.InternalError(e.message);
            }
            if (entity) {
                return entity;
            }
            throw new errors_1.NotFound(`Cannot find entity ${this.entityName} with id: ${id}`);
        });
    }
    update(id, data, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.get(id);
            entity.updatedAt = new Date();
            const patchData = lodash_1.merge(entity, data);
            try {
                yield this.entityRepository.update(this.entityRepository.getId(entity), patchData);
                return yield this.get(id, query);
            }
            catch (e) {
                Logger_1.default.log('service:update', `An error happened while updating data with id: ${id}\n
data: ${JSON.stringify(data, null, 2)}`, e);
                throw new errors_1.InternalError(e.message);
            }
        });
    }
}
exports.GenericService = GenericService;
//# sourceMappingURL=GenericService.js.map