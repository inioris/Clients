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
class CheckIn1595579381841 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'Factura',
                columns: [
                    {
                        name: 'IdFactura',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'IdUsuario',
                        type: 'int',
                    },
                    {
                        name: 'DescripcionDeCompra',
                        type: 'varchar',
                        length: '250',
                    },
                    {
                        name: 'RNC',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'IVA',
                        type: 'decimal',
                        precision: 7,
                        scale: 2,
                        isNullable: true,
                    },
                    {
                        name: 'Cantidad',
                        type: 'int',
                    },
                    {
                        name: 'PagoCon',
                        type: 'int',
                    },
                    {
                        name: 'Devuelta',
                        type: 'decimal',
                        precision: 7,
                        scale: 2,
                    },
                    {
                        name: 'TotalAPagar',
                        type: 'decimal',
                        precision: 7,
                        scale: 2,
                    },
                    {
                        name: 'AplicaDevolicion',
                        type: 'bit',
                    },
                    {
                        name: 'CreatedAt',
                        type: 'Date',
                    },
                    {
                        name: 'UpdatedAt',
                        type: 'Date',
                        isNullable: true,
                    },
                ],
            });
            yield queryRunner.createTable(table, true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('Factura');
        });
    }
}
exports.CheckIn1595579381841 = CheckIn1595579381841;
//# sourceMappingURL=1595579381841-CheckIn.js.map