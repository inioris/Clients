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
class Products1595579322621 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'Productos',
                columns: [
                    {
                        name: 'IdProducto',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'Nombre',
                        type: 'varchar',
                        length: '150',
                    },
                    {
                        name: 'Codigo',
                        type: 'varchar',
                        length: '4',
                    },
                    {
                        name: 'Cantidad',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'IdUsuario',
                        type: 'int',
                    },
                    {
                        name: 'IdTipo',
                        type: 'int',
                    },
                    {
                        name: 'Precio',
                        type: 'decimal',
                    },
                    {
                        name: 'PrecioDeCompra',
                        type: 'decimal',
                        isNullable: true,
                    },
                    {
                        name: 'IdEstadoDeProducto',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'IdCategoria',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'IdProveedor',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'IdCodigoDeBarra',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'IdFechaDeCaducidad',
                        type: 'int',
                        isNullable: true,
                    },
                    {
                        name: 'Habilitado',
                        type: 'bit',
                    },
                    {
                        name: 'Descripcion',
                        type: 'varchar',
                        length: '200',
                        isNullable: true,
                    },
                    {
                        name: 'UpdatedAt',
                        type: 'Date',
                    },
                    {
                        name: 'CreatedAt',
                        type: 'Date',
                    },
                ],
            });
            yield queryRunner.createTable(table, true);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('Productos');
        });
    }
}
exports.Products1595579322621 = Products1595579322621;
//# sourceMappingURL=1595579322621-Products.js.map