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
exports.mocks = {
    sexes: {
        data: [
            {
                name: 'Men',
                code: 'M',
            },
        ],
    },
    roles: {
        data: [
            {
                name: 'administrator',
                description: 'role',
            },
        ],
    },
    countries: {
        data: [
            {
                name: faker.address.country(),
                acronym: faker.address.countryCode(),
            },
        ],
    },
    nationalities: {
        data: [
            {
                name: faker.address.country(),
                country(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('countries').get(1);
                    });
                },
            },
        ],
    },
    persons: {
        data: [
            {
                names: faker.name.firstName(),
                firstSurname: faker.name.lastName(),
                secondSurname: faker.name.lastName(),
                birthDate: new Date(),
                cardId: faker.random.alphaNumeric(12),
                isPassport: false,
                gender(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('sexes').get(1);
                    });
                },
                nationality(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('nationalities').get(1);
                    });
                },
            },
        ],
    },
    permissions: {
        data: [
            {
                name: 'user_manager',
                description: 'user_manager',
                code: 'user_manager',
            },
            {
                name: 'permission',
                description: 'permission',
                code: 'permission',
            },
        ],
    },
    groups: {
        data: [
            {
                name: faker.name.prefix(),
                description: 'this text',
            },
            {
                name: faker.name.prefix(),
                description: 'this text',
            },
        ],
    },
    'permission-groups': {
        data: [
            {
                group(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('groups').get(1);
                    });
                },
                permission(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('permissions').get(1);
                    });
                },
            },
            {
                group(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('groups').get(1);
                    });
                },
                permission(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return app.service('permissions').get(2);
                    });
                },
            },
        ],
    },
    'user-permission-groups': {
        data: [
            {
                user(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield app.service('users').get(1);
                    });
                },
                group(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield app.service('groups').get(1);
                    });
                },
                createdBy(app) {
                    return __awaiter(this, void 0, void 0, function* () {
                        return yield app.service('users').get(1);
                    });
                },
            },
        ],
    },
};
function configureMocks(app) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const service in exports.mocks) {
            const data = exports.mocks[service].data;
            for (const item of data) {
                for (const property in item) {
                    if (typeof item[property] === 'function') {
                        item[property] = yield item[property](app);
                    }
                }
                yield app.service(service).create(item);
            }
        }
    });
}
exports.configureMocks = configureMocks;
//# sourceMappingURL=mocks.js.map