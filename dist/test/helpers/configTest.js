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
const app_1 = require("../../src/app");
const loader_1 = require("../../config/loader");
const mocks_1 = require("./mocks");
const typeorm_1 = require("typeorm");
const request = require("supertest");
const tables = [
    'personal_references',
    'person_jobs',
    'municipalities',
    'additional_information_of_persons',
    'civil_status',
    'person_contacts',
    'contact_types',
    'person_address',
    'provinces',
    'branch_office',
    'dates_of_payments',
    'companies',
    'days_of_payments',
    'banks',
    'user_permission_group',
    'users',
    'persons',
    'permission_groups',
    'nationalities',
    'permissions',
    'groups',
    'roles',
    'countries',
    'sexes',
];
function setupEach() {
    return __awaiter(this, void 0, void 0, function* () {
        this.app = yield app_1.buildApp(loader_1.default);
        this.client = request(this.app);
        yield mocks_1.configureMocks(this.app);
        this.session = (yield this.client.post('/login').send({
            username: 'test',
            password: '123456',
        })).body;
    });
}
exports.setupEach = setupEach;
function shutdownEach() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = typeorm_1.getConnection();
        for (const table of tables) {
            const repository = connection.getRepository(table);
            yield repository.delete({});
        }
        yield connection.dropDatabase();
        yield connection.close();
    });
}
exports.shutdownEach = shutdownEach;
//# sourceMappingURL=configTest.js.map