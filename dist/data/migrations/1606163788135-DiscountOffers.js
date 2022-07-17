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
class DiscountOffers1606163788135 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'Ofertas',
                columns: [
                    {
                        name: 'IdOfertas',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'IdProductoEnOfertas',
                        type: 'int',
                    },
                    {
                        name: 'Nombre',
                        type: 'varchar',
                        length: '200',
                    },
                    {
                        name: 'Precio',
                        type: 'decimal',
                    },
                    {
                        name: 'IdUsuario',
                        type: 'int',
                    },
                    {
                        name: 'Codigo',
                        type: 'varchar',
                        length: '4',
                    },
                    {
                        name: 'IdCodigoDeBarra',
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
                        length: '250',
                        isNullable: true,
                    },
                    {
                        name: 'CreatedAt',
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
            yield queryRunner.dropTable('Ofertas');
        });
    }
}
exports.DiscountOffers1606163788135 = DiscountOffers1606163788135;
//# sourceMappingURL=1606163788135-DiscountOffers.js.map