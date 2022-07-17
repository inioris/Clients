"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: 8000,
    database: {
        type: 'postgres',
        host: 'localhost',
        username: 'root',
        password: 'inioris',
        database: 'FerreteriaCompleta',
        port: 5432,
        synchronize: true,
        logging: false,
        entities: [`${__dirname}/../src/services/**/*.entity{.ts,.js}`],
        migrationsTableName: 'app_migrations',
        migrations: ['dist/data/migrations/*{.ts,.js}'],
        cli: {
            migrationsDir: 'data/migrations',
            entitiesDir: `${__dirname}/../src/services/**/*.entity{.ts,.js}`,
        },
    },
};
exports.default = config;
//# sourceMappingURL=test.js.map