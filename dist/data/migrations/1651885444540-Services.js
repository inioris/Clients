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
class Services1651885444540 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'Servicios',
                columns: [
                    {
                        name: 'IdServicio',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'Nombre',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'Codigo',
                        type: 'varchar',
                        length: '4',
                        isNullable: true,
                    },
                    {
                        name: 'Costo',
                        type: 'decimal',
                    },
                    {
                        name: 'Habilitado',
                        type: 'bit',
                    },
                    {
                        name: 'IdUsuario',
                        type: 'int',
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
            yield queryRunner.dropTable('Servicios');
        });
    }
}
exports.Services1651885444540 = Services1651885444540;
//# sourceMappingURL=1651885444540-Services.js.map