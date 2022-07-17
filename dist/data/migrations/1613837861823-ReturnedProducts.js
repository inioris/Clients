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
class ReturnedProducts1613837861823 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'ProductosRetirados',
                columns: [
                    {
                        name: 'IdProductosRetirados',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'IdVentaDeProducto',
                        type: 'int',
                    },
                    {
                        name: 'IdUsuario',
                        type: 'int',
                    },
                    {
                        name: 'IdEstadoDeProductosRetirados',
                        type: 'int',
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
            yield queryRunner.dropTable('ProductosRetirados');
        });
    }
}
exports.ReturnedProducts1613837861823 = ReturnedProducts1613837861823;
//# sourceMappingURL=1613837861823-ReturnedProducts.js.map