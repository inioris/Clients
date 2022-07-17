"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: 80,
    database: {
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'password',
        synchronize: false,
        database: 'RamonDB',
        port: 5432,
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
//# sourceMappingURL=staging.js.map