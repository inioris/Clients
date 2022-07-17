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
const path = require("path");
const glob = require("glob");
const Factory_1 = require("../../factories/Factory/Factory");
const factories = new Map();
function define(entityClass, factoryDefineFunction, connection) {
    const factory = new Factory_1.default(connection, entityClass, factoryDefineFunction, factories);
    factories.set(entityClass, factory);
}
exports.define = define;
function factory(entityClass) {
    const factory = factories.get(entityClass);
    return factory;
}
exports.factory = factory;
function loadFactories(factoriesDir) {
    glob.sync(factoriesDir).forEach((file) => {
        require(path.resolve(file));
    });
}
exports.loadFactories = loadFactories;
function loadSeeders(seedersDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const seeders = [];
        glob.sync(seedersDir).forEach((file) => {
            const seederFile = require(path.resolve(file));
            if (seederFile['default']) {
                const seeder = new seederFile['default']();
                seeders.push(seeder);
            }
        });
        for (const seeder of seeders) {
            console.log('Seeding: ', seeder);
            yield seeder.seed(factories);
        }
    });
}
exports.loadSeeders = loadSeeders;
//# sourceMappingURL=Seeders.js.map