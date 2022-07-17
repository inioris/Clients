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
const table = new typeorm_1.Table({
    name: 'Categorias',
    columns: [
        {
            name: 'IdCategoria',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            generationStrategy: 'increment',
        },
        {
            name: 'Nombre',
            type: 'varchar',
            length: '100',
            isUnique: true,
        },
        {
            name: 'IdUsuario',
            type: 'int',
        },
    ],
});
class Category1595579501890 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(table, true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(table);
        });
    }
}
exports.Category1595579501890 = Category1595579501890;
//# sourceMappingURL=1595579501890-Category.js.map