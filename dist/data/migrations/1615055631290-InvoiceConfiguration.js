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
class InvoiceConfiguration1615055631290 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'ConfiguracionDeFactura',
                columns: [
                    {
                        name: 'IdConfiguracionDeFactura',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'Provincia',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'Telefono',
                        type: 'varchar',
                        length: '50',
                        isNullable: true,
                    },
                    {
                        name: 'Calle',
                        type: 'varchar',
                        length: '200',
                        isNullable: true,
                    },
                    {
                        name: 'Direccion',
                        type: 'varchar',
                        length: '500',
                        isNullable: true,
                    },
                    {
                        name: 'CodigoPostal',
                        type: 'varchar',
                        length: '20',
                        isNullable: true,
                    },
                    {
                        name: 'RNC',
                        type: 'varchar',
                        length: '30',
                        isNullable: true,
                    },
                    {
                        name: 'CreatedAt',
                        type: 'Date',
                        isNullable: true,
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
            yield queryRunner.dropTable('ConfiguracionDeFactura');
        });
    }
}
exports.InvoiceConfiguration1615055631290 = InvoiceConfiguration1615055631290;
//# sourceMappingURL=1615055631290-InvoiceConfiguration.js.map