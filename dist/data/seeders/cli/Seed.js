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
const Seeders_1 = require("./Seeders");
const typeorm_1 = require("typeorm");
const loader_1 = require("../../../config/loader");
const factoriesDir = `${__dirname}/../../factories/*Factory{.js,.ts}`;
const seedersDir = `${__dirname}/../*Seeder{.js,.ts}`;
function runSeeders() {
    return __awaiter(this, void 0, void 0, function* () {
        yield typeorm_1.createConnection(loader_1.default.database);
        Seeders_1.loadFactories(factoriesDir);
        console.log('[+] Loaded factories: ');
        yield Seeders_1.loadSeeders(seedersDir);
    });
}
runSeeders().then(() => {
    console.log('[+] Entities seeded successfully');
    process.exit(0);
}).catch((error) => {
    console.log('[*] Error seeding entities:');
    console.log(error);
    process.exit(0);
});
//# sourceMappingURL=Seed.js.map