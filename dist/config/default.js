"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: 8000,
    database: {
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'password',
        synchronize: false,
        database: 'TestProjects',
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
    token: {
        secretKey: 'secret',
        tokenExpiration: 43200,
    },
};
exports.default = config;
//# sourceMappingURL=default.js.map