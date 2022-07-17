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
class Users1595578707890 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
                name: 'Usuarios',
                columns: [
                    {
                        name: 'IdUsuario',
                        type: 'int',
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'IdRol',
                        type: 'int',
                    },
                    {
                        name: 'AutorizadoPor',
                        type: 'int',
                    },
                    {
                        name: 'Nombre',
                        type: 'varchar',
                        length: '100',
                    },
                    {
                        name: 'Usuario',
                        type: 'varchar',
                        length: '50',
                        isUnique: true,
                    },
                    {
                        name: 'Email',
                        type: 'varchar',
                        length: '100',
                        isUnique: true,
                    },
                    {
                        name: 'Contrasena',
                        type: 'varchar',
                        length: '100',
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
            yield queryRunner.dropTable('Usuarios');
        });
    }
}
exports.Users1595578707890 = Users1595578707890;
//# sourceMappingURL=1595578707890-Users.js.map